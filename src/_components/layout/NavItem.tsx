import { Link, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { hoverUnderlined } from "../ui/CommonStyles";

const NavItem: React.FC<CustomRoute> = ({ path, name }) => {
  const { pathname } = useLocation();

  const hoverBgColor = useColorModeValue(
    "hover:bg-slate-300",
    "hover:bg-slate-700"
  );
  const bgColor = useColorModeValue("bg-slate-300", "bg-slate-700");

  return (
    <Link
      className={`!no-underline relative min-w-[6rem] cursor-pointer 
            text-center py-1 text-lg ${hoverBgColor} ${
        pathname === path && `before:w-full ${bgColor} `
      } ${hoverUnderlined}  `}
      as={RouterLink}
      to={path}
      key={path}
    >
      {name}
    </Link>
  );
};

export default NavItem;
