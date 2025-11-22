import {
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverProps,
  PopoverTrigger,
  Portal,
} from "@chakra-ui/react";

interface CustomPopoverProps extends PopoverProps {
  title?: string;
  children?: React.ReactNode;
}
const CustomPopover: React.FC<CustomPopoverProps> = ({
  title,
  children,
  ...props
}) => {
  return (
    <Popover {...props}>
      <PopoverTrigger>
        <Button>trigger</Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>{title}</PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>{children}</PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};
export default CustomPopover;
