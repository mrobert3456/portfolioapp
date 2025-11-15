import { useState } from "react";
import { LambdaError } from "../interfaces/Chat";

const API_GW_CHAT = import.meta.env.VITE_LAMBDA_CHAT_URL!;

//"http://127.0.0.1:8000/chat";

const useChatTool = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [error, setError] = useState<string | undefined>();

  const sendMessage = async (message: string) => {
    setIsLoading(true);
    setMessages((prevMessages) => [...prevMessages, message]);
    const data = { message: message };
    fetch(API_GW_CHAT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response: Response) => {
        if (response.status !== 200) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: LambdaError | string) => {
        if ((data as LambdaError)?.errorMessage) {
          throw new Error(
            `Lambda function error: ${(data as LambdaError).errorMessage}`
          );
        }
        setMessages((prevMessages) => [...prevMessages, data as string]);
      })
      .catch((error: Error) => {
        setError(error.message);
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
