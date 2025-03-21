import { Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { TbListDetails } from "react-icons/tb";
import { AGENT } from "../../config/metadata";

interface ChatHeaderProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ setIsOpen }) => {
  const iconBgColors = useColorModeValue(
    "!bg-transparent hover:!bg-slate-300",
    "!bg-transparent hover:!bg-slate-700"
  );

  return (
    <div id="chat__header" className="flex items-center justify-between gap-2">
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
  );
};
export default ChatHeader;
