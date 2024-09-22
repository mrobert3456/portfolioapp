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
import { Link, useLocation } from "react-router-dom";
import useNavigation from "../../hooks/useNavigation";

interface HeaderProps {
  routes: CustomRoute[];
}
const Header: React.FC<HeaderProps> = ({ routes }) => {
  const { toggleColorMode } = useColorMode();
  const { pageRef } = useNavigation();
  const location = useLocation();
  const headerText =
    location.pathname === "/"
      ? "ForestLake"
      : `ForestLake | ${location.pathname.split("/")[1]}`;
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
        className="text-left whitespace-nowrap capitalize w-[13rem] min-w[13rem]"
        onClick={() => {
          pageRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        {headerText}
      </Text>

      <Flex className="!hidden sm:!flex justify-center w-full">
        {routes.map((route: CustomRoute, index: number) => (
          <div key={`${route.path}_${index}_desk`}>
            <NavItem
              path={route.path}
              name={route.name}
              action={route.action}
            />
          </div>
        ))}
      </Flex>

      <div className="flex justify-end w-[13rem] min-w[13rem]">
        <IconButton
          className={`!hidden sm:!flex !rounded-none ${iconBgColors}  `}
          icon={themeColorIcon}
          onClick={toggleColorMode}
          aria-label={"Toggle color mode"}
        />
      </div>

      <Flex className="sm:!hidden justify-end w-full">
        <HamburgerMenu routes={routes} />
      </Flex>
    </Flex>
  );
};

export default Header;
