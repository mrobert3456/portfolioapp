import {
  Icon,
  Text,
  useColorModeValue,
  Box,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import { useRef, useEffect } from "react";
import { CiUser } from "react-icons/ci";

interface ChatBodyProps {
  messages: string[];
  isLoading: boolean;
  error?: string;
}
const ChatBody: React.FC<ChatBodyProps> = ({ messages, isLoading, error }) => {
  const profileColors = useColorModeValue("!bg-slate-300", "!bg-slate-700");
  const userMessageBg = useColorModeValue("!bg-slate-300", "!bg-slate-800");

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <Box className="flex-1 gap-3 p-4 overflow-y-auto">
      <Flex direction="column" gap={3} align="flex-start">
        {messages.map((message, index) => (
          <Flex
            key={index}
            align="center"
            gap={2}
            justify={index % 2 === 0 ? "flex-end" : "flex-start"}
            alignSelf={index % 2 === 0 ? "flex-end" : "flex-start"}
          >
            {index % 2 !== 0 && (
              <Icon
                w={30}
                h={30}
                p={1}
                className={`rounded-full ${profileColors}`}
              >
                <CiUser size={24} />
              </Icon>
            )}
            <Box
              className={`p-2 rounded-lg break-words ${
                index % 2 === 0 && userMessageBg
              }`}
            >
              <Text>{message}</Text>
            </Box>
          </Flex>
        ))}
        <div ref={messagesEndRef} />
      </Flex>
      {isLoading && !error && <Spinner size="sm" color="blue.500" />}
      {error && !isLoading && <Text color="red.500">{error}</Text>}
    </Box>
  );
};

export default ChatBody;
