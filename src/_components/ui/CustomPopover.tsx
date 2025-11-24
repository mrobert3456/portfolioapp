import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverProps,
  PopoverTrigger,
} from "@chakra-ui/react";
import { buttonStyle } from "./CommonStyles";

interface CustomPopoverProps extends PopoverProps {
  title?: string;
  children?: React.ReactNode;
}
const CustomPopover: React.FC<CustomPopoverProps> = ({
  id,
  title,
  children,
  ...props
}) => {
  return (
    <Popover {...props} id={id}>
      <PopoverTrigger>
        <Button className={`${buttonStyle}flex gap-2 cursor-pointer`} size="sm">
          See details
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverHeader>{title}</PopoverHeader>
        <PopoverCloseButton />
        <PopoverBody>{children}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
export default CustomPopover;
