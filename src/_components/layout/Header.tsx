import {
  Flex,
  IconButton,
  Link,
  useColorMode,
  useColorModeValue,
  Text,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  Switch,
  MenuDivider,
} from "@chakra-ui/react";
import { WiDaySunny, WiNightClear } from "react-icons/wi";
import { CustomRoutes } from "./Routes";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { pathname } = useLocation();

  return (
    <Flex as="nav" className="w-full px-6">
      <Text h={10} p={2} className="text-center">
        {"{Placeholder}"}
      </Text>

      <Flex className="!hidden sm:!flex gap-5 justify-center w-full">
        {CustomRoutes.map((route: CustomRoute) => (
          <Link
            className={`!no-underline relative min-w-[6rem] cursor-pointer 
            text-center py-1 text-lg hover:before:w-full
            before:block before:absolute before:bottom-0 before:left-0 
            before:bg-blue-500 before:h-[4px] 
            ${useColorModeValue("hover:bg-slate-300", "hover:bg-slate-700")} ${
              pathname === route.path
                ? `before:w-full ${useColorModeValue(
                    "bg-slate-300",
                    "bg-slate-700"
                  )} `
                : "before:w-0"
            } before:transition-width before:duration-300 before:ease-in-out shadow-md shadow-gray-600`}
            as={RouterLink}
            to={route.path}
            key={route.path}
          >
            {route.name}
          </Link>
        ))}
      </Flex>

      <IconButton
        className={`!hidden sm:!flex !rounded-none ${useColorModeValue(
          "!bg-transparent hover:!bg-slate-300",
          "!bg-transparent hover:!bg-slate-700"
        )} `}
        icon={useColorModeValue(
          <WiDaySunny size={24} />,
          <WiNightClear size={24} />
        )}
        onClick={toggleColorMode}
        aria-label={"Toggle color mode"}
      />
      <Flex className="sm:!hidden justify-end w-full">
        <Menu closeOnSelect={false}>
          <MenuButton
            className="!rounded-none"
            as={IconButton}
            icon={<GiHamburgerMenu size={24} />}
          />
          <MenuList className="!rounded-none ">
            <MenuItem as="div">
              {colorMode === "light" ? "Dark" : "Light"}{" "}
              {useColorModeValue(
                <WiDaySunny size={24} />,
                <WiNightClear size={24} />
              )}
              <Switch onChange={toggleColorMode} />
            </MenuItem>
            <MenuDivider />
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Header;
