import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverHeaderProps,
  PopoverProps,
  PopoverTrigger,
} from "@chakra-ui/react";
import { buttonStyle } from "./CommonStyles";
import { WithHeader, WithTitle } from "../../interfaces/ui";

interface Props extends PopoverProps {
  disabled?: boolean;
  headerProps?: PopoverHeaderProps;
  contentWidth?: string;
  contentHeight?: string;
  triggerComponent?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}

type PopoverWithTitle = WithTitle & Props;

type PopoverWithHeader = WithHeader & Props;

export type CustomPopoverProps = PopoverWithTitle | PopoverWithHeader;

const CustomPopover: React.FC<CustomPopoverProps> = ({
  id,
  disabled,
  title,
  header,
  children,
  headerProps,
  triggerComponent,
  contentWidth,
  contentHeight,
  footer,
  ...props
}) => {
  return (
    <Popover {...props} id={id}>
      <PopoverTrigger>
        {triggerComponent === undefined ? (
          <Button
            className={`${buttonStyle}flex gap-2 cursor-pointer`}
            size="sm"
          >
            See details
          </Button>
        ) : (
          triggerComponent
        )}
      </PopoverTrigger>

      <PopoverContent width={contentWidth} className="!rounded-none  ">
        <PopoverArrow />
        <PopoverHeader {...headerProps}>{title || header}</PopoverHeader>
        <PopoverCloseButton className="!rounded-none" />

        <PopoverBody className="overflow-auto" height={contentHeight}>
          {children}
        </PopoverBody>
        <PopoverFooter>{footer}</PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};
export default CustomPopover;
