import {
  useColorModeValue,
  Box,
  Flex,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { useRef, useEffect, useContext } from "react";

import { ActionType, ComponentTypeProps } from "../../interfaces/Chat";
import EmailComponent from "./Components/EmailComponent";
import QuestionComponent from "./Components/QuestionComponent";
import { STARTER_MESSAGE } from "../../config/metadata";
import { ChatContext } from "../layout/Mainlayout";

const COMPONENTS: Record<ActionType, React.FC<ComponentTypeProps>> = {
  email: EmailComponent,
  question: QuestionComponent,
};

const ChatBody: React.FC = () => {
  const { agentAnswers, isLoading, error } = useContext(ChatContext)!;

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
        {agentAnswers.length === 0 && (
          <QuestionComponent message={STARTER_MESSAGE} role="assistant" />
        )}
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
              <Component
                message={agentAnswer.content}
                role={index % 2 === 0 ? "user" : "assistant"}
              />
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
