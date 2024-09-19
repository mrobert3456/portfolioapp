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
import ReCaptcha from "./ReCaptcha";
import useContactForm from "../hooks/useContactForm";
import { useEffect } from "react";

const ContactForm: React.FC = () => {
  const {
    nameRef,
    emailRef,
    messageRef,
    handleSubmit,
    tokenCallback,
    errors,
    response,
  } = useContactForm();

  const toast = useToast();

  const handleFormSubmit = () => {
    if (errors.length > 0) {
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
    handleSubmit();
  };

  useEffect(() => {
    if (response) {
      toast({
        id: "email-response",
        title: "Email",
        description: `${JSON.parse(response.body)}`,
        status: response.statusCode === 200 ? "success" : "error",
        duration: 4000,
        isClosable: true,
        position: "top-right",
        containerStyle: { borderRadius: "0px !important" },
      });
    }
  }, [response]);

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
        onClick={handleFormSubmit}
      >
        Send
      </Button>
      <ReCaptcha
        title="contact__recaptcha"
        sitekey={"6LdPfkYqAAAAAJByam8Spj4a8nkQLLDwRKpyfU7g"}
        callback={tokenCallback}
      />
    </FormControl>
  );
};

export default ContactForm;
