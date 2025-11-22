import { useState } from "react";
import { ChatParams, LambdaError, Message } from "../interfaces/Chat";
import useAwsFlows from "./useAwsFlows";

const API_GW_CHAT = import.meta.env.VITE_LAMBDA_CHAT_URL!;

const useChatTool = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState<string | null>();
  const { invokeFlow } = useAwsFlows();

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
        console.log(response);
        setIsLoading(false);
        if (response!.actionType == "question") {
          setMessages((prev) => [
            ...prev,
            { type: "question", content: response!.result as string },
          ]);
        } else if (response!.actionType == "email") {
          setMessages((prev) => [
            ...prev,
            { type: "email", content: response!.result as ContactInformation },
          ]);
        }
      })
      .catch((error) => {
        console.log(error);
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
