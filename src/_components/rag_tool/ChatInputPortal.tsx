import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ChatInput from "./ChatInput";

const ChatInputPortal: React.FC = () => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.getElementById("chat-input");
    setContainer(el as HTMLElement | null);
  }, []);

  if (!container) return null;

  return createPortal(<ChatInput />, container);
};

export default ChatInputPortal;
