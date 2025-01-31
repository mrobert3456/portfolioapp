import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
  Text,
} from "@chakra-ui/react";

interface CustomDrawerProps extends DrawerProps {
  title?: string;
}
const CustomDrawer: React.FC<CustomDrawerProps> = ({
  title,
  children,
  ...props
}) => {
  return (
    <Drawer {...props}>
      <DrawerOverlay />
      <DrawerContent rounded="md" className="!rounded-none">
        <DrawerHeader>
          <Text>{title}</Text>
        </DrawerHeader>
        <DrawerBody>{children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
export default CustomDrawer;
