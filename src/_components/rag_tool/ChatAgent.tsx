import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CloseButton,
  Flex,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import useChatTool from "../../hooks/useChatTool";
import { createContext, useState } from "react";
import AgentDetails from "./AgentDetails";
import ChatBody from "./ChatBody";
import { ChatTool } from "../../interfaces/Chat";
import ChatInput from "./ChatInput";
import { BiExpand } from "react-icons/bi";

export const ChatContext = createContext<ChatTool | null>(null);
interface ChatAgentProps {
  handleExpand: () => void;
  onClose: () => void;
}
const ChatAgent: React.FC<ChatAgentProps> = ({ handleExpand, onClose }) => {
  const { sendMessage, agentAnswers, error, isLoading } = useChatTool();

  const headerBgColor = useColorModeValue("bg-slate-400", "bg-slate-700");

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <ChatContext.Provider
      value={{ sendMessage, agentAnswers, error, isLoading }}
    >
      <Card id="about_chat_agent__card" className="!w-full !h-full ">
        <CardHeader
          className={`flex justify-between gap-2 sticky top-0 ${headerBgColor} !p-2 text-white border-b-2`}
        >
          <Flex className="items-center gap-2">
            <Tooltip label="Expand">
              <Box className="hover:cursor-pointer">
                <BiExpand onClick={handleExpand} />
              </Box>
            </Tooltip>

            <div className="w-2 h-2 rounded-full !bg-green-500" />
            <h2>ForestLake Assistant</h2>
          </Flex>
          <CloseButton onClick={onClose} />
        </CardHeader>
        <CardBody className="!w-full !h-full overflow-auto">
          <AgentDetails isOpen={isOpen} setIsOpen={setIsOpen} />
          <ChatBody />
        </CardBody>
        <CardFooter className="sticky bottom-0 border-t-2 !p-2">
          <ChatInput />
        </CardFooter>
      </Card>
    </ChatContext.Provider>
  );
};
export const ChatWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const borderColor = useColorModeValue("border-gray-300", "border-gray-500");
  const [width, setWidth] = useState<string>("400px");
  const [height, setHeight] = useState<string>("600px");

  const handleExpand = () => {
    setWidth((prev) => (prev == "80%" ? "400px" : "80%"));
    setHeight((prev) => (prev == "80%" ? "600px" : "80%"));
  };
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
            width: `${width}`,
            height: `${height}`,
            boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
            overflow: "hidden",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
          }}
          className={`!border-2 ${borderColor} rounded-md`}
        >
          <div className="flex !h-full !w-full">
            <ChatAgent
              handleExpand={handleExpand}
              onClose={() => setOpen(false)}
            />
          </div>
        </Box>
      )}
    </>
  );
};

export default ChatAgent;
