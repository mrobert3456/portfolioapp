import {
  InputGroup,
  Input,
  InputRightElement,
  Button,
  FormControl,
} from "@chakra-ui/react";
import { buttonStyle } from "../ui/CommonStyles";
import { useContext, useState } from "react";
import { ChatContext } from "../layout/Mainlayout";

const ChatInput: React.FC = () => {
  const { sendMessage, isLoading } = useContext(ChatContext)!;
  const [userInput, setUserInput] = useState<string | undefined>();
  return (
    <>
      {/* {agentAnswers.length === 0 && (
        <div className="flex gap-2">
          {PROMPT_EXAMPLES.map((example, index) => (
            <Tag
              key={`example-${index}`}
              className={`${buttonStyle} hover:cursor-pointer `}
              onClick={() => {
                sendMessage({ type: "question", content: example! });
                setUserInput("");
              }}
            >
              {example}
            </Tag>
          ))}
        </div>
      )} */}
      <FormControl className="flex flex-col gap-2 !w-full">
        <InputGroup size="md" className="w-full">
          <Input
            className={`${buttonStyle.replace("!text-xs", "!text-base")} `}
            paddingRight="5rem"
            placeholder="Ask me anything"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setUserInput(event.target.value)
            }
            onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
              if (userInput && userInput.length > 0 && event.key === "Enter") {
                sendMessage({ type: "question", content: userInput! });
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
                sendMessage({ type: "question", content: userInput! });
                setUserInput("");
              }}
              isDisabled={isLoading || !userInput}
            >
              Send
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </>
  );
};

export default ChatInput;
