import { useEffect, useRef, useState } from "react";
import { validateForm } from "../utils/validateContactForm";
import { useToast } from "@chakra-ui/react";

const API_GW_ENDPOINT =
  "https://jra9zep1a7.execute-api.eu-central-1.amazonaws.com/default/send_mail_function";
const SITE_KEY = "6Lf0_UkqAAAAAKbrIXHAZC18GZKY1id9p75rwL9Z";
const useContactForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toast = useToast();
  useEffect(() => {
    const script = document.createElement("script");

    if (typeof window !== "undefined") {
      //@ts-expect-error: grecaptcha is not defined
      if (!window.grecaptcha) {
        script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
        script.async = true;
        document.head.appendChild(script);
      }
    }
    return () => {
      //@ts-expect-error: grecaptcha is not defined
      window.grecaptcha = null;
      document.head.removeChild(script);
    };
  }, []);

  const handleSubmit = async () => {
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
    setIsLoading(true);
    //@ts-expect-error: grecaptcha is not defined
    window.grecaptcha.ready(() => {
      //@ts-expect-error: grecaptcha is not defined
      window.grecaptcha
        .execute(SITE_KEY, { action: "submit" })
        .then((token: string) => {
          const data = {
            token: token,
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
            .then((response: Response) => {
              if (response.status === 200) {
                nameRef.current!.value = "";
                emailRef.current!.value = "";
                messageRef.current!.value = "";
              }
              return response.json();
            })
            .then((data: ContactResponse) => {
              setIsLoading(false);
              toast({
                id: "email-response",
                title: "Email",
                description: `${JSON.parse(data.body)}`,
                status: data.statusCode === 200 ? "success" : "error",
                duration: 4000,
                isClosable: true,
                position: "top-right",
                containerStyle: { borderRadius: "0px !important" },
              });
            });
        });
    });
  };

  return {
    isLoading,
    nameRef,
    emailRef,
    messageRef,
    handleSubmit,
  };
};

export default useContactForm;
