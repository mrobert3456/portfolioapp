import {
  useDisclosure,
  Icon,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import Markdown from "react-markdown";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { CHAT_AGENT_DISCLAIMER } from "../../config/metadata";
import CustomDrawer from "../ui/CustomDrawer";
import CustomModal from "../ui/CustomModal";
const AgentDisclaimer: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const iconBgColors = useColorModeValue(
    "!bg-transparent hover:!bg-slate-300",
    "!bg-transparent hover:!bg-slate-700"
  );

  const Container = useBreakpointValue({
    base: CustomDrawer,
    md: CustomModal,
  }) as React.ElementType;
  return (
    <>
      <Icon
        w={5}
        h={5}
        as={IoIosInformationCircleOutline}
        onClick={onOpen}
        className={`hover:cursor-pointer ${iconBgColors}`}
      />
      <Container
        title="Chat Agent & Data Disclaimer"
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
      >
        <Markdown>{CHAT_AGENT_DISCLAIMER}</Markdown>
      </Container>
    </>
  );
};

export default AgentDisclaimer;
