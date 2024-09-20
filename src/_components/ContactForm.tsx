import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Tag,
  Textarea,
} from "@chakra-ui/react";
import { buttonStyle } from "./ui/CommonStyles";
import useContactForm from "../hooks/useContactForm";

const ContactForm: React.FC = () => {
  const { nameRef, emailRef, messageRef, handleSubmit } = useContactForm();

  return (
    <FormControl className="flex flex-col gap-2 m-3">
      <FormLabel className="!flex !justify-between !mr-0">
        Contact{" "}
        <Tag className="!text-xs !rounded-none">Not implemented yet</Tag>
      </FormLabel>
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
        placeholder="message"
        className="!rounded-none"
      />

      <Button
        className={`${buttonStyle} cursor-pointer`}
        onClick={handleSubmit}
      >
        Send
      </Button>
    </FormControl>
  );
};

export default ContactForm;
