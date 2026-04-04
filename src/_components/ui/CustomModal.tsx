import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from "@chakra-ui/react";
interface Props extends ModalProps {
  title?: string;
  defaultIsOpen?: boolean;
}
const CustomModal: React.FC<Props> = ({
  title,
  defaultIsOpen,
  children,
  ...props
}) => {
  return (
    <Modal isCentered {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
