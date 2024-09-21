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

const ContactForm: React.FC = () => {
  const { isLoading, nameRef, emailRef, messageRef, handleSubmit } =
    useContactForm();

  return (
    <FormControl className="flex flex-col gap-2 m-3">
      <FormLabel className="!flex !justify-between !mr-0">Contact </FormLabel>
      <Input
        ref={nameRef}
        type="text"
        placeholder="Name"
        className="!rounded-none"
      />

      <Input
        ref={emailRef}
        type="email"
        placeholder="Email"
        className="!rounded-none"
      />

      <Textarea
        ref={messageRef}
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
