import { useEffect, useRef, useState } from "react";

interface ReCaptchaProps {
  title?: string;
  sitekey: string;
  callback: (token: string) => void;
}
const ReCaptcha: React.FC<ReCaptchaProps> = ({ title, sitekey, callback }) => {
  const captchaRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const onRecaptchaLoad = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    const script = document.createElement("script");

    if (typeof window !== "undefined") {
      //@ts-expect-error: onRecaptchaLoad is not defined
      window.onRecaptchaLoad = onRecaptchaLoad;
      //@ts-expect-error: grecaptcha is not defined
      if (!window.grecaptcha) {
        script.src = `https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      }
      //@ts-expect-error: grecaptcha is not defined
      else if (window.grecaptcha && window.grecaptcha.render) {
        setIsLoaded(true);
      }
    }

    return () => {
      //@ts-expect-error: onRecaptchaLoad is not defined
      window.onRecaptchaLoad = null;
      //@ts-expect-error: grecaptcha is not defined
      window.grecaptcha = null;
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (isLoaded) {
      //@ts-expect-error: grecaptcha is not defined
      window.grecaptcha.render(captchaRef.current, {
        sitekey: sitekey,
        callback: callback,
      });
    }
  }, [isLoaded]);

  return (
    <div
      key={title}
      className="g-racaptcha hidden"
      data-size="invisible"
      ref={captchaRef}
    />
  );
};

export default ReCaptcha;
