import {
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Stack,
  Tag,
} from "@chakra-ui/react";
import { buttonStyle } from "../ui/CommonStyles";
import { AGENT } from "../../config/metadata";
import { useContext, useState } from "react";
import { ChatContext } from "./ChatAgent";

const PROMPT_EXAMPLES = [
  "What university degree did Robert get?",
  "Where does Robert work?",
  "How many years of experience does Robert have?",
];
const ChatInput: React.FC = () => {
  const { sendMessage, messages, isLoading } = useContext(ChatContext)!;
  const [userInput, setUserInput] = useState<string | undefined>();

  return (
    <Stack className="w-[90%]">
      {messages.length === 0 && (
        <div className="flex gap-2">
          {PROMPT_EXAMPLES.map((example, index) => (
            <Tag
              key={`example-${index}`}
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
        <InputGroup size="md" className="w-full">
          <Input
            className={`${buttonStyle}`}
            paddingRight="5rem"
            placeholder="Ask me anything"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setUserInput(event.target.value)
            }
            onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
              if (userInput && userInput.length > 0 && event.key === "Enter") {
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
    </Stack>
  );
};

export default ChatInput;

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
