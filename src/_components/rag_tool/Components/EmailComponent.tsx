import { Flex } from "@chakra-ui/react";
import { ComponentTypeProps } from "../../../interfaces/Chat";
import SendEmailForm from "../SendEmailForm";

const EmailComponent: React.FC<ComponentTypeProps> = ({ agentAnswer }) => {
  return (
    <Flex className="gap-2 items-center">
      <div>I have prepared the email for you</div>
      <SendEmailForm
        message={(agentAnswer.content as ContactInformation).message}
        name={(agentAnswer.content as ContactInformation).name}
        email={(agentAnswer.content as ContactInformation).email}
      />
    </Flex>
  );
};

export default EmailComponent;
