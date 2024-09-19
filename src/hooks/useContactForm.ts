import { useRef, useState } from "react";
import { validateForm } from "../utils/validateContactForm";

const API_GW_ENDPOINT = "http://localhost:8000/sendEmail";

const useContactForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [, setCaptchaToken] = useState<string | null>(null);
  const [response, setResponse] = useState<ContactResponse | null>(null);

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
      .then((data: ContactResponse) => setResponse(data));
  };

  return {
    nameRef,
    emailRef,
    messageRef,
    handleSubmit,
    tokenCallback,
    errors,
    response,
  };
};

export default useContactForm;
