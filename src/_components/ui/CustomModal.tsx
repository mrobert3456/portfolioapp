import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalContentProps,
  ModalFooter,
  ModalHeader,
  ModalHeaderProps,
  ModalOverlay,
  ModalProps,
} from "@chakra-ui/react";
import { WithHeader, WithTitle } from "../../interfaces/ui";

export interface CustomModalProps extends ModalProps {
  defaultIsOpen?: boolean;
  footer?: React.ReactNode;
  headerProps?: ModalHeaderProps;
  contentProps?: ModalContentProps;
}

type ModalWithTitle = WithTitle & CustomModalProps;

type ModalWithHeader = WithHeader & CustomModalProps;

type Props = ModalWithTitle | ModalWithHeader;

const CustomModal: React.FC<Props> = ({
  title,
  header,
  defaultIsOpen,
  children,
  headerProps,
  footer,
  contentProps,
  ...props
}) => {
  const { className: contentClassName = "", ...restContentProps } =
    contentProps ?? {};

  return (
    <Modal isCentered {...props}>
      <ModalOverlay />
      <ModalContent
        className={`!rounded-none flex flex-col max-h-[80vh] ${contentClassName}`}
        {...restContentProps}
      >
        <ModalHeader className="shrink-0">{title || header}</ModalHeader>

        <ModalCloseButton className="!rounded-none" />

        <ModalBody className="flex-1 overflow-y-auto">{children}</ModalBody>

        <ModalFooter className="!block shrink-0">{footer}</ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
