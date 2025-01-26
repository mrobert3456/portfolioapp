import {
  Button,
  Card,
  CardBody,
  Input,
  InputGroup,
  InputRightElement,
  Progress,
} from "@chakra-ui/react";
import useChatTool from "../../hooks/useChatTool";
import { useState } from "react";

const ChatAgent: React.FC = () => {
  const { sendMessage, messages, error, isLoading } = useChatTool();
  const [userInput, setUserInput] = useState<string | undefined>();

  return (
    <Card id="about_chat_agent__card" className="!rounded-none w-full h-full">
      <CardBody className="flex flex-col gap-5 flex-wrap justify-end">
        <div className="flex-1">
          {messages.map((value: string, index: number) => {
            if (index % 2 === 0) {
              return <p className="text-right">{value}</p>;
            }
            return <p className="text-left">{value}</p>;
          })}
          {isLoading && !error && (
            <Progress isIndeterminate className="w-10 rounded" />
          )}
          {error && !isLoading && <p>{error}</p>}
        </div>

        <InputGroup size="md">
          <Input
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
      </CardBody>
    </Card>
  );
};

export default ChatAgent;
