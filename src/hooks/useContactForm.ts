import { useRef, useState } from "react";
import { validateForm } from "../utils/validateContactForm";

const useContactForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const { isValid, errors } = validateForm({
    name: nameRef.current?.value || "",
    email: emailRef.current?.value || "",
    message: messageRef.current?.value || "",
  });

  const tokenCallback = (token: string) => {
    setCaptchaToken(token);
  };
  const handleSubmit = () => {
    if (!isValid) return;
    //recaptcha execute
    //@ts-expect-error: grecaptcha is not defined
    window.grecaptcha.execute();

    //send captchaToken
    //form submisson to AWS API gateway
  };

  return { nameRef, emailRef, messageRef, handleSubmit, tokenCallback, errors };
};

export default useContactForm;
