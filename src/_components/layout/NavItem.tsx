import { useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { hoverSidelined, hoverUnderlined } from "../ui/CommonStyles";

const NavItem: React.FC<CustomRoute> = ({ path, name, action }) => {
  const { pathname } = useLocation();
  const hoverStyle = useBreakpointValue({
    base: hoverSidelined,
    sm: hoverUnderlined,
  });

  const currentBeforeStyle = useBreakpointValue({
    base: "h-full",
    sm: "w-full",
  });
  const boxShadow = useBreakpointValue({
    base: "inset 4.1px 0 0 #3b82f6",
    sm: "inset 0 -4px 0 #3b82f6",
  });
  const hoverBgColor = useColorModeValue(
    "hover:bg-slate-300",
    "hover:bg-slate-700"
  );
  const bgColor = useColorModeValue("bg-slate-300", "bg-slate-700");

  return (
    <div
      className={`!no-underline relative min-w-[6rem] cursor-pointer 
            text-center py-1 text-lg ${hoverBgColor} ${
        pathname === path && `before:${currentBeforeStyle} ${bgColor} `
      } ${hoverStyle}`}
      style={{ boxShadow: pathname === path ? boxShadow : "" }}
      onClick={action}
    >
      {name}
    </div>
  );
};

export default NavItem;
