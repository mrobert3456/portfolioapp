import { useState } from "react";

const API_GW_CHAT =
  "https://3new8sc795.execute-api.eu-central-1.amazonaws.com/default/rag_chat_function";

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
      .then((data: string) => {
        setMessages((prevMessages) => [...prevMessages, data]);
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
