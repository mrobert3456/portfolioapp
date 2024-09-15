import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  Switch,
  MenuDivider,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { WiDaySunny, WiNightClear } from "react-icons/wi";
import NavItem from "./NavItem";

interface HamburgerMenuProps {
  routes: CustomRoute[];
}
const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ routes }) => {
  const { toggleColorMode } = useColorMode();
  const themeModeIcon = useColorModeValue(
    <WiDaySunny size={24} />,
    <WiNightClear size={24} />
  );
  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        className="!rounded-none"
        as={IconButton}
        icon={<GiHamburgerMenu size={24} />}
      />
      <MenuList className="!rounded-none !min-w-[11rem]">
        <MenuItem className="flex gap-1">
          {themeModeIcon}
          <Text className="flex-1 text-sm">Dark mode</Text>
          <Switch onChange={toggleColorMode} />
        </MenuItem>
        <MenuDivider />
        {routes.map((route: CustomRoute) => (
          <MenuItem className="flex justify-center">
            <NavItem
              path={route.path}
              name={route.name}
              action={route.action}
            />
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default HamburgerMenu;
