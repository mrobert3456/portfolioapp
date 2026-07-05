import {
  AssistantMessageContent,
  ContentBlockDeltaEvent,
  ContentBlockStartEvent,
  StreamEnvelope,
  ToolUse,
  UserMessageContent,
} from "../interfaces/Agent";
import { ChatParams } from "../interfaces/Chat";
import { ContactInformation } from "../interfaces/Contact";

const FLOW_API_GW = import.meta.env.VITE_FLOW_API_URL!;

export type StreamEvent =
  | { type: "chunk"; text: string }
  | { type: "email"; contact: ContactInformation }
  | { type: "done" };

const useAwsFlows = () => {
  const isContentBlockStart = (
    event: StreamEnvelope["event"],
  ): event is ContentBlockStartEvent =>
    !!(event as ContentBlockStartEvent)?.contentBlockStart;

  const isContentBlockDelta = (
    event: StreamEnvelope["event"],
  ): event is ContentBlockDeltaEvent =>
    !!(event as ContentBlockDeltaEvent)?.contentBlockDelta;

  async function* invoke(
    input: ChatParams,
  ): AsyncGenerator<StreamEvent, void, void> {
    const response = await fetch(FLOW_API_GW, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: input.message,
        history: input.history,
      }),
    });

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    if (!response.body) {
      throw new Error("Response body is empty");
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    let buffer = "";

    // toolUseId -> tool name
    const toolUses = new Map<string, string>();

    while (true) {
      const { done, value } = await reader.read();

      if (done) break;

      buffer += decoder.decode(value, { stream: true });

      const events = buffer.split("\n\n");

      buffer = events.pop() ?? "";

      for (const event of events) {
        if (!event.startsWith("data:")) continue;

        const payload = event.slice(5).trim();

        if (!payload.startsWith("{")) continue;

        try {
          const json: StreamEnvelope = JSON.parse(payload);

          //
          // Remember every tool use
          //

          let toolUse: ToolUse | null = null;
          let delta: string | null = null;

          if (isContentBlockStart(json.event)) {
            toolUse = json.event.contentBlockStart.start.toolUse as ToolUse;

            if (toolUse.toolUseId && toolUse.name) {
              toolUses.set(toolUse.toolUseId, toolUse.name);
            }
          }

          //
          // Stream assistant text
          //
          if (isContentBlockDelta(json.event)) {
            delta = json.event.contentBlockDelta.delta.text as string;
          }

          if (delta) {
            yield {
              type: "chunk",
              text: delta,
            };
          }

          //
          // Tool result
          //
          const message = json.message;

          if (message?.role === "user") {
            for (const content of message.content ?? []) {
              const toolResult = (content as UserMessageContent).toolResult;

              if (!toolResult) continue;

              const toolName = toolUses.get(toolResult.toolUseId);

              if (
                toolName === "email_preparation_tool" &&
                toolResult.status === "success"
              ) {
                const text = toolResult.content?.[0]?.text;

                if (!text) continue;

                yield {
                  type: "email",
                  contact: JSON.parse(text),
                };
              }
            }
          }

          //
          // Conversation finished
          //
          if (
            message?.role === "assistant" &&
            !message.content?.some(
              (c) => (c as AssistantMessageContent).toolUse,
            )
          ) {
            yield {
              type: "done",
            };
          }
        } catch (err) {
          console.error(err);
        }
      }
    }

    yield {
      type: "done",
    };
  }

  return {
    invoke,
  };
};

export default useAwsFlows;
