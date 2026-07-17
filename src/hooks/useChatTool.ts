import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";

import useAwsFlows from "./useAwsFlows";
import { AgentAnswer, ChatParams } from "../interfaces/Chat";

const useChatTool = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [agentAnswers, setAgentAnswers] = useState<AgentAnswer[]>([]);
  const [error, setError] = useState<string | null>(null);

  const { isOpen, onClose, onToggle } = useDisclosure();
  const { invoke } = useAwsFlows();

  const sendMessage = async (agentAnswer: AgentAnswer) => {
    try {
      setIsLoading(true);
      setError(null);

      const history = [...agentAnswers]
        .reverse()
        .filter((x) => x.type === "question")
        .slice(0, 5)
        .map((x) => x.content as string);

      const data: ChatParams = {
        message: agentAnswer.content as string,
        history,
      };

      // Add user message
      setAgentAnswers((prev) => [...prev, agentAnswer]);

      // Placeholder assistant message for streaming
      setAgentAnswers((prev) => [
        ...prev,
        {
          type: "question",
          content: "",
        },
      ]);

      let receivedEmail = false;

      for await (const event of invoke(data)) {
        switch (event.type) {
          case "chunk":
            // Ignore streamed markdown once an email tool has taken over
            if (receivedEmail) break;

            setAgentAnswers((prev) => {
              const updated = [...prev];
              const last = updated[updated.length - 1];

              if (last?.type === "question") {
                updated[updated.length - 1] = {
                  ...last,
                  content: (last.content as string) + event.text,
                };
              }

              return updated;
            });
            break;

          case "email":
            receivedEmail = true;

            setAgentAnswers((prev) => {
              const updated = [...prev];

              // Remove the streamed assistant placeholder
              if (
                updated.length > 0 &&
                updated[updated.length - 1].type === "question"
              ) {
                updated.pop();
              }

              updated.push({
                type: "email",
                content: event.contact,
              });

              return updated;
            });

            break;

          case "done":
            setIsLoading(false);
            break;
        }
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";

      setError(message);

      setAgentAnswers((prev) => {
        const updated = [...prev];

        // Remove empty placeholder if present
        const last = updated[updated.length - 1];

        if (
          last?.type === "question" &&
          (last.content as string).trim() === ""
        ) {
          updated.pop();
        }

        updated.push({
          type: "question",
          content: message,
        });

        return updated;
      });

      setIsLoading(false);
    }
  };

  return {
    sendMessage,
    agentAnswers,
    error,
    isLoading,
    isOpen,
    onToggle,
    onClose,
  };
};

export default useChatTool;
