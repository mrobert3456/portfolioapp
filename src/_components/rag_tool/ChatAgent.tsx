import {
  Button,
  Card,
  CardBody,
  Input,
  InputGroup,
  InputRightElement,
  Tag,
} from "@chakra-ui/react";
import useChatTool from "../../hooks/useChatTool";
import { useState } from "react";
import AgentDetails from "./AgentDetails";
import { AGENT } from "../../config/metadata";
import { buttonStyle } from "../ui/CommonStyles";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";

const PROMPT_EXAMPLES = [
  "What university degree did Robert get?",
  "Where does Robert work?",
  "How many years of experience does Robert have?",
];

const ChatAgent: React.FC = () => {
  const { sendMessage, messages, error, isLoading } = useChatTool();
  const [userInput, setUserInput] = useState<string | undefined>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Card
      id="about_chat_agent__card"
      className="!rounded-none w-full h-full !bg-transparent !border-none !shadow-none"
    >
      <CardBody className="flex flex-col gap-5 flex-wrap justify-end !p-0 sm:!p-4">
        <ChatHeader setIsOpen={setIsOpen} />
        <AgentDetails isOpen={isOpen} setIsOpen={setIsOpen} />
        <ChatBody messages={messages} isLoading={isLoading} error={error} />

        {messages.length === 0 && (
          <div className="flex gap-2">
            {PROMPT_EXAMPLES.map((example) => (
              <Tag
                className={`${buttonStyle} hover:cursor-pointer `}
                onClick={() => {
                  sendMessage(example!);
                  setUserInput("");
                }}
              >
                {example}
              </Tag>
            ))}
          </div>
        )}

        <div>
          <InputGroup size="md">
            <Input
              className={`${buttonStyle}`}
              paddingRight="5rem"
              placeholder="Ask me anything"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setUserInput(event.target.value)
              }
              onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
                if (
                  userInput &&
                  userInput.length > 0 &&
                  event.key === "Enter"
                ) {
                  sendMessage(userInput!);
                  setUserInput("");
                }
              }}
              value={userInput}
            />
            <InputRightElement width="4.5rem">
              <Button
                className="!rounded-none"
                h="1.75rem"
                size="sm"
                onClick={() => {
                  sendMessage(userInput!);
                  setUserInput("");
                }}
                isDisabled={isLoading || !userInput}
              >
                Send
              </Button>
            </InputRightElement>
          </InputGroup>
          <Disclaimer />
        </div>
      </CardBody>
    </Card>
  );
};

const Disclaimer: () => React.ReactNode = () => (
  <p className="text-xs text-center">
    Be aware that the model can make mistakes. Please review my{" "}
    <a
      className="text-xs focus-visible:!shadow-none hover:underline text-blue-500"
      href={AGENT.documents.url}
      target="_blank"
    >
      CV
    </a>{" "}
    to ensure there are no inconsistencies!
  </p>
);

export default ChatAgent;
