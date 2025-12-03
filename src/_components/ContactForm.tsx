import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  Textarea,
} from "@chakra-ui/react";
import { buttonStyle } from "./ui/CommonStyles";
import useContactForm from "../hooks/useContactForm";

interface Props {
  email?: string;
  name?: string;
  message?: string;
  disabled?: boolean;
  onClose?: () => void;
}
const ContactForm: React.FC<Props> = ({
  email,
  name,
  message,
  disabled = false,
  onClose,
}) => {
  const { isLoading, nameRef, emailRef, messageRef, handleSubmit } =
    useContactForm();

  return (
    <FormControl className="flex flex-col gap-2" isDisabled={disabled}>
      <FormLabel className="!flex !justify-between !mr-0">Contact</FormLabel>
      <Input
        ref={nameRef}
        defaultValue={name || ""}
        type="text"
        placeholder="Name"
        className="!rounded-none"
      />

      <Input
        ref={emailRef}
        defaultValue={email || ""}
        type="email"
        placeholder="Email"
        className="!rounded-none"
      />

      <Textarea
        ref={messageRef}
        defaultValue={message || ""}
        placeholder="Message"
        className="!rounded-none"
      />

      <Button
        className={`${buttonStyle}flex gap-2 cursor-pointer`}
        onClick={() => {
          handleSubmit();
          if (onClose) {
            onClose();
          }
        }}
        isDisabled={isLoading || disabled}
      >
        {isLoading && <Spinner size="sm" />}
        {isLoading ? "Sending" : "Send"}
      </Button>
    </FormControl>
  );
};

export default ContactForm;
