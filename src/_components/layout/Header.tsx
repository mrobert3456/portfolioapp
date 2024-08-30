import {
  Flex,
  IconButton,
  Link,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { WiDaySunny, WiNightClear } from "react-icons/wi";
import { CustomRoutes } from "./Routes";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { pathname } = useLocation();

  return (
    <Flex
      className={`h-10 border-b-1 fixed top-0 w-full z-50 ${useColorModeValue(
        "bg-slate-200",
        "bg-slate-600"
      )}`}
      as="nav"
    >
      <ul className="flex flex-1">
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
            } before:transition-width before:duration-300 before:ease-in-out`}
            as={RouterLink}
            to={route.path}
            key={route.path}
          >
            {route.name}
          </Link>
        ))}
      </ul>

      <IconButton
        className={`!rounded-none ${useColorModeValue(
          "!bg-slate-200 hover:!bg-slate-300",
          "!bg-slate-600 hover:!bg-slate-700"
        )} `}
        icon={
          colorMode === "light" ? (
            <WiDaySunny size={24} />
          ) : (
            <WiNightClear size={24} />
          )
        }
        onClick={toggleColorMode}
        aria-label={"Toggle color mode"}
      />
    </Flex>
  );
};

export default Header;
