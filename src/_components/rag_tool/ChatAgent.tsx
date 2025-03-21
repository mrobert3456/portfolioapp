import {
  Button,
  Card,
  CardBody,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Progress,
  useColorModeValue,
  Text,
  Tag,
} from "@chakra-ui/react";
import useChatTool from "../../hooks/useChatTool";
import { useState } from "react";
import AgentDetails from "./AgentDetails";
import { TbListDetails } from "react-icons/tb";
import { AGENT } from "../../config/metadata";
import { buttonStyle } from "../ui/CommonStyles";
import { CiUser } from "react-icons/ci";
const PROMPT_EXAMPLES = [
  "What university degree did Robert get?",
  "Where does Robert work?",
  "How many years of experience does Robert have?",
];
const ChatAgent: React.FC = () => {
  const { sendMessage, messages, error, isLoading } = useChatTool();
  const [userInput, setUserInput] = useState<string | undefined>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const iconBgColors = useColorModeValue(
    "!bg-transparent hover:!bg-slate-300",
    "!bg-transparent hover:!bg-slate-700"
  );

  const profileColors = useColorModeValue("!bg-slate-300", "!bg-slate-700");
  return (
    <Card id="about_chat_agent__card" className="!rounded-none w-full h-full">
      <CardBody className="flex flex-col gap-5 flex-wrap justify-end">
        <div
          id="chat__header"
          className="flex items-center justify-between gap-2"
        >
          <div id="chat__model_id" className="flex gap-2">
            <Icon as={AGENT.model.icon} size={24} color="blue.500" />
            <Text className="text-xs">{AGENT.model.name}</Text>
          </div>
          <Icon
            size={24}
            as={TbListDetails}
            onClick={() => setIsOpen(true)}
            className={`hover:cursor-pointer ${iconBgColors}`}
          />
        </div>
        <AgentDetails isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="flex-1">
          {messages.map((value: string, index: number) => {
            if (index % 2 === 0) {
              return (
                <p className="text-right">
                  <Tag className="p-2">{value}</Tag>
                </p>
              );
            }
            return (
              <div className="flex gap-2 items-center">
                <Icon
                  w={30}
                  h={30}
                  p={1}
                  className={`rounded-full ${profileColors}`}
                >
                  <CiUser size={24} />
                </Icon>
                {value}
              </div>
            );
          })}

          {isLoading && !error && (
            <Progress isIndeterminate className="w-10 rounded" />
          )}
          {error && !isLoading && <p>{error}</p>}
        </div>
        {messages.length === 0 && (
          <div className="hidden sm:flex gap-2">
            {PROMPT_EXAMPLES.map((example) => (
              <Tag
                className={`${buttonStyle} hover:cursor-pointer`}
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
        </div>
      </CardBody>
    </Card>
  );
};

export default ChatAgent;
