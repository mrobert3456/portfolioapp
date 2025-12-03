import {
  Icon,
  useColorModeValue,
  Box,
  Flex,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { useRef, useEffect, useContext } from "react";
import { CiUser } from "react-icons/ci";
import Markdown from "react-markdown";
import { ChatContext } from "./ChatAgent";
import SendEmailForm from "./SendEmailForm";

const ChatBody: React.FC = () => {
  const { messages, isLoading, error } = useContext(ChatContext)!;

  const profileColors = useColorModeValue("!bg-slate-300", "!bg-slate-700");
  const userMessageBg = useColorModeValue("!bg-slate-300", "!bg-slate-800");
  const linkColor = useColorModeValue("#0f62fe", "#a6c8ff");
  const toast = useToast();
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

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
              {message.type === "question" && (
                <Markdown
                  components={{
                    a: ({ node, ...props }) => {
                      return (
                        <a
                          className="markdown-link"
                          style={{ color: linkColor }}
                          href={props.href as string}
                        >
                          {props.children}
                        </a>
                      );
                    },
                  }}
                >
                  {message.content as string}
                </Markdown>
              )}
              {message.type == "email" && (
                <Flex className="gap-2 items-center">
                  <div>I have prepared the email for you</div>
                  <SendEmailForm
                    message={(message.content as ContactInformation).message}
                    name={(message.content as ContactInformation).name}
                    email={(message.content as ContactInformation).email}
                  />
                </Flex>
              )}
            </Box>
          </Flex>
        ))}
        <div ref={messagesEndRef} />
      </Flex>
      {isLoading && !error && <Spinner size="sm" color="blue.500" />}
    </Box>
  );
};

export default ChatBody;
