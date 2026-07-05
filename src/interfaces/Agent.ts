export interface ToolUse {
  toolUseId: string;
  name: string;
  type?: string;
}

export interface ContentBlockStartEvent {
  contentBlockStart: {
    start: {
      toolUse?: ToolUse;
    };
    contentBlockIndex: number;
  };
}

export interface ContentBlockDeltaEvent {
  contentBlockDelta: {
    delta: {
      text?: string;
    };
    contentBlockIndex: number;
  };
}

export interface ToolResultContent {
  text: string;
}

export interface ToolResult {
  status: "success" | "error";
  toolUseId: string;
  content: ToolResultContent[];
}

export interface AssistantMessageContent {
  text?: string;
  toolUse?: ToolUse;
}

export interface UserMessageContent {
  toolResult?: ToolResult;
}

export interface StreamMessage {
  role: "assistant" | "user";
  content: Array<AssistantMessageContent | UserMessageContent>;
  metadata?: {
    usage?: {
      inputTokens: number;
      outputTokens: number;
      totalTokens: number;
    };
    metrics?: Record<string, unknown>;
  };
}

export interface StreamEnvelope {
  event?: ContentBlockStartEvent | ContentBlockDeltaEvent;
  message?: StreamMessage;
  error?: {
    message: string;
  };
}
