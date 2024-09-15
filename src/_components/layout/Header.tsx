import {
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { WiDaySunny, WiNightClear } from "react-icons/wi";
import NavItem from "./NavItem";
import HamburgerMenu from "./HamburgerMenu";
import { Link } from "react-router-dom";
import useNavigation from "../../hooks/useNavigation";

interface HeaderProps {
  routes: CustomRoute[];
}
const Header: React.FC<HeaderProps> = ({ routes }) => {
  const { toggleColorMode } = useColorMode();
  const { pageRef } = useNavigation();

  const themeColorIcon = useColorModeValue(
    <WiDaySunny size={36} />,
    <WiNightClear size={36} />
  );
  const iconBgColors = useColorModeValue(
    "!bg-transparent hover:!bg-slate-300",
    "!bg-transparent hover:!bg-slate-700"
  );
  return (
    <Flex
      as="nav"
      className="fixed top-0 py-[1rem] !z-50 w-full px-6 h-max backdrop-blur-sm"
    >
      <Text
        as={Link}
        to={"/"}
        h={10}
        p={2}
        className="text-center"
        onClick={() => {
          pageRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        ForestLake
      </Text>

      <Flex className="!hidden sm:!flex gap-5 justify-center w-full">
        {routes.map((route: CustomRoute) => (
          <NavItem path={route.path} name={route.name} action={route.action} />
        ))}
      </Flex>

      <IconButton
        className={`!hidden sm:!flex !rounded-none ${iconBgColors} `}
        icon={themeColorIcon}
        onClick={toggleColorMode}
        aria-label={"Toggle color mode"}
      />
      <Flex className="sm:!hidden justify-end w-full">
        <HamburgerMenu routes={routes} />
      </Flex>
    </Flex>
  );
};

export default Header;
