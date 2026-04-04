import { Flex, useColorModeValue } from "@chakra-ui/react";
import { ComponentTypeProps } from "../../../interfaces/Chat";
import SendEmailForm from "../SendEmailForm";

const EmailComponent: React.FC<ComponentTypeProps> = ({ message }) => {
  const assistantMessageBg = useColorModeValue(
    "!bg-slate-300",
    "!bg-slate-800",
  );
  return (
    <Flex
      className={`gap-2 items-center ${assistantMessageBg} p-1 rounded-tl-sm rounded`}
    >
      <div>I have prepared the email for you</div>
      <SendEmailForm
        message={(message as ContactInformation).message}
        name={(message as ContactInformation).name}
        email={(message as ContactInformation).email}
      />
    </Flex>
  );
};

export default EmailComponent;
