import {
  useColorModeValue,
  Box,
  Flex,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { useRef, useEffect, useContext } from "react";
import { ChatContext } from "./ChatAgent";
import { ActionType, ComponentTypeProps } from "../../interfaces/Chat";
import EmailComponent from "./Components/EmailComponent";
import QuestionComponent from "./Components/QuestionComponent";

const COMPONENTS: Record<ActionType, React.FC<ComponentTypeProps>> = {
  email: EmailComponent,
  question: QuestionComponent,
};

const ChatBody: React.FC = () => {
  const { agentAnswers, isLoading, error } = useContext(ChatContext)!;

  const userMessageBg = useColorModeValue("!bg-slate-300", "!bg-slate-800");
  const toast = useToast();
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [agentAnswers]);

  useEffect(() => {
    if (error) {
      toast({
        id: "error",
        title: "Error",
        description: error,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
        containerStyle: {
          borderRadius: "0px !important",
          maxW: "2rem",
        },
      });
    }
  }, [error]);

  return (
    <Box className="flex-1 gap-3 p-4 overflow-y-auto">
      <Flex direction="column" gap={3} align="flex-start">
        {agentAnswers.map((agentAnswer, index) => {
          const Component = COMPONENTS[agentAnswer.type];
          return (
            <Flex
              key={index}
              align="center"
              gap={2}
              justify={index % 2 === 0 ? "flex-end" : "flex-start"}
              alignSelf={index % 2 === 0 ? "flex-end" : "flex-start"}
              className="text-md"
            >
              <Box
                className={`p-2 rounded-lg break-words ${
                  index % 2 === 0 && userMessageBg
                }`}
              >
                <Component agentAnswer={agentAnswer} />
              </Box>
            </Flex>
          );
        })}
        <div ref={messagesEndRef} />
      </Flex>
      {isLoading && !error && <Spinner size="sm" color="blue.500" />}
    </Box>
  );
};

export default ChatBody;
