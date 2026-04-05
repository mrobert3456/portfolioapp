import { useState } from "react";
import { ChatParams, AgentAnswer } from "../interfaces/Chat";
import useAwsFlows from "./useAwsFlows";
import { useDisclosure } from "@chakra-ui/react";

const useChatTool = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [agentAnswers, setAgentAnswers] = useState<AgentAnswer[]>([]);
  const [error, setError] = useState<string | null>();
  const { isOpen, onClose, onToggle } = useDisclosure();
  const { invoke: invokeFlow } = useAwsFlows();

  const sendMessage = async (agentAnswer: AgentAnswer) => {
    setIsLoading(true);
    setError(null);
    setAgentAnswers((prevMessages) => [...prevMessages, agentAnswer]);

    const history = [...agentAnswers]
      .reverse()
      .filter((item) => item.type == "question")
      .filter((_, index) => index <= 5)
      .map((item) => item.content) as string[];

    const data: ChatParams = {
      message: agentAnswer.content as string,
      history: history,
    };

    invokeFlow(data)
      .then((response) => {
        console.log(response);
        if (
          response === null ||
          response?.actionType === null ||
          response?.result === null
        ) {
          throw new Error(
            "I do not understand your question. Please try rephrasing it.",
          );
        }
        if (response.actionType == "question") {
          setAgentAnswers((prev) => [
            ...prev,
            { type: "question", content: response.result as string },
          ]);
        } else if (response.actionType == "email") {
          setAgentAnswers((prev) => [
            ...prev,
            { type: "email", content: response.result as ContactInformation },
          ]);
        }
      })
      .catch((error: Error) => {
        setAgentAnswers((prev) => [
          ...prev,
          { type: "question", content: error.message },
        ]);
      })
      .finally(() => {
        setIsLoading(false);
      });
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
