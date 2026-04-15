import {
  Box,
  Flex,
  IconButton,
  ModalProps,
  Tooltip,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import AgentDetails from "./AgentDetails";
import ChatBody from "./ChatBody";
import ChatInput from "./ChatInput";
import { BiExpand } from "react-icons/bi";
import CustomModal from "../ui/CustomModal";
import CustomPopover, { CustomPopoverProps } from "../ui/CustomPopover";
import { RiRobot2Fill } from "react-icons/ri";
import { ChatContext } from "../layout/Mainlayout";
import { hoverImgScaling } from "../ui/CommonStyles";
import { CgDetailsMore } from "react-icons/cg";
import AgentDisclaimer from "./AgentDisclaimer";

interface ChatAgentProps {
  isDetailsOpen: boolean;
  setDetailsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const ChatAgent: React.FC<ChatAgentProps> = ({
  isDetailsOpen,
  setDetailsOpen,
}) => {
  return (
    <Box className="overflow-auto">
      <AgentDetails isOpen={isDetailsOpen} setIsOpen={setDetailsOpen} />
      <ChatBody />
    </Box>
  );
};
export const ChatWidget: React.FC = () => {
  const headerBgColor = useColorModeValue("bg-slate-300", "bg-slate-700");
  const [width, setWidth] = useState<string>("400px");
  const [height, setHeight] = useState<string>("500px");
  const { onToggle, isOpen, onClose } = useContext(ChatContext)!;
  const [isDetailsOpen, setDetailsOpen] = useState<boolean>(false);

  const iconBgColors = useColorModeValue(
    "!bg-transparent hover:!bg-slate-300",
    "!bg-transparent hover:!bg-slate-700",
  );
  const handleExpand = () => {
    const maxWidth = window.innerWidth - 32;
    const maxHeight = window.innerHeight - 300;

    setWidth((prev) =>
      prev === "400px" ? `${Math.min(600, maxWidth)}px` : "400px",
    );

    setHeight((prev) =>
      prev === "500px" ? `${Math.min(700, maxHeight)}px` : "500px",
    );
  };

  const WidgetComponent = useBreakpointValue({
    base: CustomModal,
    sm: CustomPopover,
  }) as React.ElementType;

  const widgetProps = useBreakpointValue({
    base: {
      size: "full",
    } as ModalProps,
    sm: {
      placement: "top-start",
      contentWidth: width,
      contentHeight: height,
    } as CustomPopoverProps,
  });

  return (
    <>
      <IconButton
        onClick={onToggle}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor: "#007bff",
          color: "white",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          zIndex: 9999,
        }}
        aria-label=""
      >
        <RiRobot2Fill size={24} />
      </IconButton>
      <WidgetComponent
        {...widgetProps}
        headerProps={{
          className: headerBgColor,
        }}
        closeOnBlur={false}
        isOpen={isOpen}
        onClose={onClose}
        header={
          <Flex id="header" className="items-center gap-2">
            <Flex className="items-center gap-2">
              <Tooltip label="Expand">
                <Box
                  className={`hover:cursor-pointer ${hoverImgScaling} hidden sm:!flex`}
                >
                  <BiExpand onClick={handleExpand} />
                </Box>
              </Tooltip>

              <div className="w-2 h-2 rounded-full !bg-green-500" />
              <h2>ForestLake Assistant</h2>
            </Flex>
            <Tooltip label="Details">
              <Box className={`hover:cursor-pointer ${iconBgColors}`}>
                <CgDetailsMore onClick={() => setDetailsOpen(true)} />
              </Box>
            </Tooltip>

            <Tooltip label="Disclaimer">
              <div>
                <AgentDisclaimer />
              </div>
            </Tooltip>
          </Flex>
        }
        footer={
          <Box className="sticky bottom-0">
            <ChatInput />
          </Box>
        }
        triggerComponent={
          <div
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              width: "60px",
              height: "60px",
              display: "hidden",
            }}
          />
        }
      >
        <ChatAgent
          setDetailsOpen={setDetailsOpen}
          isDetailsOpen={isDetailsOpen}
        />
      </WidgetComponent>
    </>
  );
};

export default ChatAgent;
