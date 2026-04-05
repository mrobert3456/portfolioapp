import { Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import useNavigation from "../../hooks/useNavigation";
import { ChatWidget } from "../rag_tool/ChatAgent";
import useChatTool from "../../hooks/useChatTool";
import { createContext } from "react";
import { ChatTool } from "../../interfaces/Chat";

export const ChatContext = createContext<ChatTool | null>(null);

const MainLayout: React.FC = () => {
  const { customRoutes } = useNavigation();

  const {
    sendMessage,
    agentAnswers,
    error,
    isLoading,
    isOpen,
    onToggle,
    onClose,
  } = useChatTool();

  return (
    <Stack
      h="100vh"
      className={`relative !overflow-hidden ${useColorModeValue(
        " bg-gradient-to-tr from-gray-200",
        " bg-gradient-to-tr from-black",
      )}`}
    >
      <Header routes={customRoutes} />

      <main className="p-8 z-10 mt-20 overflow-y-auto h-full">
        {/* <div ref={pageRef} /> */}{" "}
        <ChatContext.Provider
          value={{
            sendMessage,
            agentAnswers,
            error,
            isLoading,
            isOpen,
            onToggle,
            onClose,
          }}
        >
          <Outlet />
          <ChatWidget />
        </ChatContext.Provider>
      </main>
      <Stack id="chat-input" className="justify-center items-center" />
      <footer className="p-4 h-[5rem] flex items-start justify-start">
        <Text className="text-slate-500">{"ForestLake@2024"}</Text>
      </footer>
    </Stack>
  );
};
export default MainLayout;
