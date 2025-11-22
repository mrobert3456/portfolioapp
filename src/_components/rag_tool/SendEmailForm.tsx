import { Button, Flex, Input, Spinner, Textarea } from "@chakra-ui/react";
import CustomPopover from "../ui/CustomPopover";
import useContactForm from "../../hooks/useContactForm";
import { buttonStyle } from "../ui/CommonStyles";

interface Props {
  message: string;
  name: string;
  email: string;
}
const SendEmailForm: React.FC<Props> = ({ message, name, email }) => {
  const { isLoading, nameRef, emailRef, messageRef, handleSubmit } =
    useContactForm();

  return (
    <CustomPopover title="Send email" defaultIsOpen>
      <Flex className="flex-col gap-2">
        <Input
          ref={nameRef}
          value={name}
          type="text"
          placeholder="Name"
          className="!rounded-none"
        />

        <Input
          ref={emailRef}
          value={email}
          type="email"
          placeholder="Email"
          className="!rounded-none"
        />

        <Textarea
          ref={messageRef}
          value={message}
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
      </Flex>
    </CustomPopover>
  );
};
export default SendEmailForm;
