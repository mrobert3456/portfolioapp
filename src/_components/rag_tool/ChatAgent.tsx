import { Card, CardBody } from "@chakra-ui/react";
import useChatTool from "../../hooks/useChatTool";
import { createContext, useState } from "react";
import AgentDetails from "./AgentDetails";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatInputPortal from "./ChatInputPortal";
import { ChatTool } from "../../interfaces/Chat";

export const ChatContext = createContext<ChatTool | null>(null);

const ChatAgent: React.FC = () => {
  const { sendMessage, messages, error, isLoading } = useChatTool();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <ChatContext.Provider value={{ sendMessage, messages, error, isLoading }}>
      <Card
        id="about_chat_agent__card"
        className="!rounded-none !w-full !h-full !bg-transparent !border-none !shadow-none mb-10"
      >
        <CardBody className="flex flex-col gap-5 flex-wrap justify-end !p-0 sm:!p-4 w-full">
          <ChatHeader setIsOpen={setIsOpen} />
          <AgentDetails isOpen={isOpen} setIsOpen={setIsOpen} />
          <ChatBody />
          <ChatInputPortal />
        </CardBody>
      </Card>
    </ChatContext.Provider>
  );
};

export default ChatAgent;
