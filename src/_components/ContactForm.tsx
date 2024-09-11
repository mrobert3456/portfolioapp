import {
  FormControl,
  FormLabel,
  Input,
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
      <FormLabel>Contact</FormLabel>
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

      <Input
        type="submit"
        className={`${buttonStyle} cursor-pointer`}
        onClick={handleSubmit}
      />
    </FormControl>
  );
};

export default ContactForm;
