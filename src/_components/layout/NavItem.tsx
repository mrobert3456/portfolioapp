import { Link, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";

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
            text-center py-1 text-lg hover:before:w-full
            before:block before:absolute before:bottom-0 before:left-0 
            before:bg-blue-500 before:h-[4px] 
            ${hoverBgColor} ${
        pathname === path ? `before:w-full ${bgColor} ` : "before:w-0"
      } before:transition-width before:duration-300 before:ease-in-out shadow-md shadow-gray-600`}
      as={RouterLink}
      to={path}
      key={path}
    >
      {name}
    </Link>
  );
};

export default NavItem;
