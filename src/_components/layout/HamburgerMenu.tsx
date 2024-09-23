import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import NavItem from "./NavItem";

interface HamburgerMenuProps {
  routes: CustomRoute[];
}
const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ routes }) => {
  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        className="!rounded-none"
        as={IconButton}
        icon={<GiHamburgerMenu size={24} />}
      />
      <MenuList className="!rounded-none !min-w-[11rem] !border-0 !p-0">
        {routes.map((route: CustomRoute, index: number) => (
          <MenuItem
            key={`{route.path}_${index}__ham`}
            className="flex justify-center"
            as={NavItem}
            path={route.path}
            name={route.name}
            action={route.action}
          />
        ))}
      </MenuList>
    </Menu>
  );
};

export default HamburgerMenu;
