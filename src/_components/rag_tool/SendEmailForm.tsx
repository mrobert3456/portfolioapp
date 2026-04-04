import {
  Button,
  Tag,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import CustomModal from "../ui/CustomModal";
import { buttonStyle } from "../ui/CommonStyles";
import CustomDrawer from "../ui/CustomDrawer";
import ContactForm from "../ContactForm";
import { useState } from "react";
interface Props {
  message: string;
  name: string;
  email: string;
}
const SendEmailForm: React.FC<Props> = ({ message, name, email }) => {
  const [hidden, sethidden] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const FormContainer = useBreakpointValue({
    base: CustomDrawer,
    md: CustomModal,
  }) as React.ElementType;

  return (
    <>
      <Button
        className={`${buttonStyle}flex gap-2 cursor-pointer`}
        size="sm"
        onClick={onOpen}
      >
        See details
      </Button>

      {hidden && <Tag>Sent</Tag>}

      <FormContainer title="Send email" isOpen={isOpen} onClose={onClose}>
        <ContactForm
          name={name}
          message={message}
          email={email}
          disabled={hidden}
          onClose={() => sethidden(true)}
        />
      </FormContainer>
    </>
  );
};
export default SendEmailForm;
