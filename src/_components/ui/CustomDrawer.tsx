import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
  Text,
} from "@chakra-ui/react";

interface CustomDrawerProps extends DrawerProps {
  title?: string;
  defaultIsOpen?: boolean;
}
const CustomDrawer: React.FC<CustomDrawerProps> = ({
  title,
  defaultIsOpen = false,
  children,
  ...props
}) => {
  const { isOpen } = props;
  return (
    <Drawer {...props} isOpen={defaultIsOpen || isOpen}>
      <DrawerOverlay />
      <DrawerContent rounded="md" className="!rounded-none">
        <DrawerHeader>
          <Text>{title}</Text>
        </DrawerHeader>
        <DrawerBody>{children}</DrawerBody>
        <DrawerFooter />
      </DrawerContent>
    </Drawer>
  );
};
export default CustomDrawer;
