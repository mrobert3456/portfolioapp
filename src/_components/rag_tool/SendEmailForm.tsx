import {
  Button,
  Flex,
  Input,
  Spinner,
  Textarea,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import CustomPopover from "../ui/CustomPopover";
import useContactForm from "../../hooks/useContactForm";
import { buttonStyle } from "../ui/CommonStyles";
import CustomDrawer from "../ui/CustomDrawer";

interface Props {
  message: string;
  name: string;
  email: string;
}
const SendEmailForm: React.FC<Props> = ({ message, name, email }) => {
  const { isLoading, nameRef, emailRef, messageRef, handleSubmit } =
    useContactForm();

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
    md: undefined,
  });

  return (
    <>
      {FormContainerProps && (
        <Button
          className={`${buttonStyle}flex gap-2 cursor-pointer`}
          size="sm"
          onClick={onOpen}
        >
          See details
        </Button>
      )}

      <FormContainer title="Send email" {...FormContainerProps}>
        <Flex className="flex-col gap-2">
          <Input
            ref={nameRef}
            value={name}
            type="text"
            placeholder="Name"
            className="!rounded-none"
          />

          <Input
            ref={emailRef}
            value={email}
            type="email"
            placeholder="Email"
            className="!rounded-none"
          />

          <Textarea
            ref={messageRef}
            value={message}
            placeholder="Message"
            className="!rounded-none"
          />
          <Button
            className={`${buttonStyle}flex gap-2 cursor-pointer`}
            onClick={handleSubmit}
            isDisabled={isLoading}
          >
            {isLoading && <Spinner size="sm" />}
            {isLoading ? "Sending" : "Send"}
          </Button>
        </Flex>
      </FormContainer>
    </>
  );
};
export default SendEmailForm;
