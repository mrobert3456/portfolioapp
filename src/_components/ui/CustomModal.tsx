import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalHeaderProps,
  ModalOverlay,
  ModalProps,
} from "@chakra-ui/react";
import { WithHeader, WithTitle } from "../../interfaces/ui";

interface CustomModalProps extends ModalProps {
  defaultIsOpen?: boolean;
  footer?: React.ReactNode;
  headerProps?: ModalHeaderProps;
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
  ...props
}) => {
  return (
    <Modal isCentered {...props}>
      <ModalOverlay />
      <ModalContent className="!rounded-none flex flex-col max-h-[80vh]">
        <ModalHeader className="shrink-0">{title || header}</ModalHeader>

        <ModalCloseButton className="!rounded-none" />

        <ModalBody className="flex-1 overflow-y-auto">{children}</ModalBody>

        <ModalFooter className="!block shrink-0">{footer}</ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
