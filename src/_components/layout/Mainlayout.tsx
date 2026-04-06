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
      className={`relative overflow-hidden ${useColorModeValue(
        "bg-white",
        "bg-black",
      )}
        before:absolute before:inset-0
        before:bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
        before:bg-[size:56px_56px]

        after:absolute after:inset-0
        after:[mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent),linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]
        after:[mask-composite:intersect]
        after:pointer-events-none`}

      // className={`relative overflow-hidden ${useColorModeValue(
      //   "bg-gradient-to-br from-gray-100 via-white to-gray-200",
      //   "bg-gradient-to-br from-black via-zinc-900 to-black",
      // )} before:absolute before:inset-0 before:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] before:bg-[size:40px_40px] before:pointer-events-none`}
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
