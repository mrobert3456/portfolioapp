import { useState } from "react";
import { ChatParams, Message } from "../interfaces/Chat";
import useAwsFlows from "./useAwsFlows";

const useChatTool = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState<string | null>();
  const { invoke: invokeFlow } = useAwsFlows();

  const sendMessage = async (message: Message) => {
    setIsLoading(true);
    setError(null);
    setMessages((prevMessages) => [...prevMessages, message]);

    const history = [...messages]
      .reverse()
      .filter((item) => item.type == "question")
      .filter((_, index) => index <= 5)
      .map((item) => item.content) as string[];

    const data: ChatParams = {
      message: message.content as string,
      history: history,
    };

    invokeFlow(data)
      .then((response) => {
        if (
          response === null ||
          response?.actionType === null ||
          response?.result === null
        ) {
          throw new Error(
            "I do not understand your question. Please try rephrasing it."
          );
        }
        if (response.actionType == "question") {
          setMessages((prev) => [
            ...prev,
            { type: "question", content: response.result as string },
          ]);
        } else if (response.actionType == "email") {
          setMessages((prev) => [
            ...prev,
            { type: "email", content: response.result as ContactInformation },
          ]);
        }
      })
      .catch((error: Error) => {
        setMessages((prev) => [
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
    messages,
    error,
    isLoading,
  };
};
export default useChatTool;
