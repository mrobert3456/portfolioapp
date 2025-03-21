import { Tag, Icon, Progress, useColorModeValue } from "@chakra-ui/react";
import { CiUser } from "react-icons/ci";

interface ChatBodyProps {
  messages: string[];
  isLoading: boolean;
  error?: string;
}
const ChatBody: React.FC<ChatBodyProps> = ({ messages, isLoading, error }) => {
  const profileColors = useColorModeValue("!bg-slate-300", "!bg-slate-700");

  return (
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
  );
};

export default ChatBody;
