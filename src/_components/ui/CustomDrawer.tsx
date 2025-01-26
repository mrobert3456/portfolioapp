import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
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
      <DrawerContent rounded="md" className="!rounded-none m-[1rem]">
        <DrawerHeader>
          <Text>{title}</Text>
        </DrawerHeader>
        <DrawerBody>{children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
export default CustomDrawer;
