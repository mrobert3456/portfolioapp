import { Flex, IconButton, useColorMode } from "@chakra-ui/react";
import { WiDaySunny, WiNightClear } from "react-icons/wi";
const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      as="nav"
      h={10}
      borderBottom="0.5px"
      pos="fixed"
      top={0}
      backgroundColor={colorMode === "light" ? "gray.200" : "gray.700"}
      w="100%"
      zIndex={100}
    >
      <IconButton
        icon={colorMode === "light" ? <WiDaySunny /> : <WiNightClear />}
        onClick={toggleColorMode}
        aria-label={"Toggle color mode"}
      />
    </Flex>
  );
};

export default Header;
