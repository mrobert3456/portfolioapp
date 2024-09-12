import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Tag,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { buttonStyle } from "./ui/CommonStyles";
import { useRef } from "react";
import { validateForm } from "../utils/validateContactForm";

const ContactForm: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const toast = useToast();

  const handleSubmit = () => {
    toast({
      title: "Info",
      isClosable: true,
      status: "info",
      description: "Feature is not implemented yet!",
      position: "top-right",
    });
    return;

    const { isValid, errors } = validateForm({
      name: nameRef.current?.value || "",
      email: emailRef.current?.value || "",
      message: messageRef.current?.value || "",
    });

    if (!isValid) {
      if (!toast.isActive("invalid-inputs")) {
        toast({
          id: "invalid-inputs",
          title: "invalid-inputs",
          description: (
            <ul>
              {errors.map((error: string) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          ),
          status: "error",
          duration: 4000,
          isClosable: true,
          position: "top-right",
          containerStyle: { borderRadius: "0px !important" },
        });
      }
      return;
    }
  };
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
