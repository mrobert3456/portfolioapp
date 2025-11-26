import { Button, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import CustomPopover from "../ui/CustomPopover";
import { buttonStyle } from "../ui/CommonStyles";
import CustomDrawer from "../ui/CustomDrawer";
import ContactForm from "../ContactForm";

interface Props {
  message: string;
  name: string;
  email: string;
}
const SendEmailForm: React.FC<Props> = ({ message, name, email }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const FormContainer = useBreakpointValue({
    base: CustomDrawer,
    md: CustomPopover,
  }) as React.ElementType;

  const FormContainerProps = useBreakpointValue({
    base: {
      isOpen: isOpen,
      onClose: onClose,
    },
    md: {
      defaultIsOpen: true,
    },
  });

  return (
    <>
      {!FormContainerProps?.defaultIsOpen && (
        <Button
          className={`${buttonStyle}flex gap-2 cursor-pointer`}
          size="sm"
          onClick={onOpen}
        >
          See details
        </Button>
      )}

      <FormContainer title="Send email" {...FormContainerProps}>
        <ContactForm name={name} message={message} email={email} />
      </FormContainer>
    </>
  );
};
export default SendEmailForm;
