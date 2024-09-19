import { useRef, useState } from "react";
import { validateForm } from "../utils/validateContactForm";
import { useToast } from "@chakra-ui/react";

const API_GW_ENDPOINT = "http://localhost:8000/sendEmail";

const useContactForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [, setCaptchaToken] = useState<string | null>(null);

  const toast = useToast();

  const tokenCallback = (token: string) => {
    setCaptchaToken(token);
  };
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
          description: errors.join("\n"),
          status: "error",
          duration: 4000,
          isClosable: true,
          position: "top-right",
          containerStyle: { borderRadius: "0px !important", maxW: "2rem" },
        });
      }
      return;
    }
    //recaptcha execute
    //@ts-expect-error: grecaptcha is not defined
    window.grecaptcha.execute();

    //send captchaToken
    //form submisson to AWS API gateway
    const data = {
      name: nameRef.current!.value,
      email: emailRef.current!.value,
      message: messageRef.current!.value,
    };

    fetch(API_GW_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response: Response) => response.json())
      .then((data: ContactResponse) =>
        toast({
          id: "email-response",
          title: "Email",
          description: `${JSON.parse(data.body)}`,
          status: data.statusCode === 200 ? "success" : "error",
          duration: 4000,
          isClosable: true,
          position: "top-right",
          containerStyle: { borderRadius: "0px !important" },
        })
      );
  };

  return {
    nameRef,
    emailRef,
    messageRef,
    handleSubmit,
    tokenCallback,
  };
};

export default useContactForm;
