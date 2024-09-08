import {
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { WiDaySunny, WiNightClear } from "react-icons/wi";
import { CustomRoutes } from "./Routes";
import NavItem from "./NavItem";
import HamburgerMenu from "./HamburgerMenu";

const Header: React.FC = () => {
  const { toggleColorMode } = useColorMode();

  const themeColorIcon = useColorModeValue(
    <WiDaySunny size={36} />,
    <WiNightClear size={36} />
  );
  const iconBgColors = useColorModeValue(
    "!bg-transparent hover:!bg-slate-300",
    "!bg-transparent hover:!bg-slate-700"
  );
  return (
    <Flex as="nav" className="w-full px-6">
      <Text h={10} p={2} className="text-center">
        {"ForestLake"}
      </Text>

      <Flex className="!hidden sm:!flex gap-5 justify-center w-full">
        {CustomRoutes.map((route: CustomRoute) => (
          <NavItem path={route.path} name={route.name} />
        ))}
      </Flex>

      <IconButton
        className={`!hidden sm:!flex !rounded-none ${iconBgColors} `}
        icon={themeColorIcon}
        onClick={toggleColorMode}
        aria-label={"Toggle color mode"}
      />
      <Flex className="sm:!hidden justify-end w-full">
        <HamburgerMenu routes={CustomRoutes} />
      </Flex>
    </Flex>
  );
};

export default Header;
