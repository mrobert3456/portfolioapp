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
}
const ContactForm: React.FC<Props> = ({ email, name, message }) => {
  const { isLoading, nameRef, emailRef, messageRef, handleSubmit } =
    useContactForm();

  return (
    <FormControl className="flex flex-col gap-2">
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
        onClick={handleSubmit}
        isDisabled={isLoading}
      >
        {isLoading && <Spinner size="sm" />}
        {isLoading ? "Sending" : "Send"}
      </Button>
    </FormControl>
  );
};

export default ContactForm;
