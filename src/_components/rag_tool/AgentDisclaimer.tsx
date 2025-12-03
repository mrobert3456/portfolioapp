import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import Markdown from "react-markdown";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { buttonStyle } from "../ui/CommonStyles";
import { CHAT_AGENT_DISCLAIMER } from "../../config/metadata";
const AgentDisclaimer: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const iconBgColors = useColorModeValue(
    "!bg-transparent hover:!bg-slate-300",
    "!bg-transparent hover:!bg-slate-700"
  );
  return (
    <>
      <Icon
        w={5}
        h={5}
        as={IoIosInformationCircleOutline}
        onClick={onOpen}
        className={`hover:cursor-pointer ${iconBgColors}`}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Chat Agent & Data Disclaimer</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Markdown>{CHAT_AGENT_DISCLAIMER}</Markdown>
          </ModalBody>

          <ModalFooter>
            <Button
              className={`${buttonStyle}flex gap-2 cursor-pointer`}
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AgentDisclaimer;
