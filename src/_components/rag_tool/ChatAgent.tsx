import { Box, Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/react";
import useChatTool from "../../hooks/useChatTool";
import { createContext, useState } from "react";
import AgentDetails from "./AgentDetails";
import ChatBody from "./ChatBody";
import { ChatTool } from "../../interfaces/Chat";
import ChatInput from "./ChatInput";

export const ChatContext = createContext<ChatTool | null>(null);

const ChatAgent: React.FC = () => {
  const { sendMessage, agentAnswers, error, isLoading } = useChatTool();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <ChatContext.Provider
      value={{ sendMessage, agentAnswers, error, isLoading }}
    >
      <Card id="about_chat_agent__card" className="!w-full !h-full">
        <CardHeader className="flex items-center gap-2 sticky top-0 !bg-sky-700 !p-2 text-white">
          <div className="w-2 h-2 rounded-full !bg-green-500" />
          <h2>ForestLake Assistant</h2>
        </CardHeader>
        <CardBody className="!w-full !h-full overflow-auto">
          <AgentDetails isOpen={isOpen} setIsOpen={setIsOpen} />
          <ChatBody />
        </CardBody>
        <CardFooter className="sticky bottom-0 ">
          <ChatInput />
        </CardFooter>
      </Card>
    </ChatContext.Provider>
  );
};
export const ChatWidget: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          zIndex: 9999,
        }}
      >
        💬
      </button>
      {open && (
        <Box
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "400px",
            height: "500px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
            overflow: "hidden",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="flex !h-full !w-full">
            <ChatAgent />
          </div>
        </Box>
      )}
    </>
  );
};

export default ChatAgent;
