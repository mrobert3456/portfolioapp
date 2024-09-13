import { Box, Flex, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainLayout: React.FC = () => {
  return (
    <Stack
      h="100vh"
      w="100%"
      className={`!justify-between overflow-auto ${useColorModeValue(
        " bg-gradient-to-tr from-gray-200",
        " bg-gradient-to-tr from-black"
      )}`}
    >
      <Flex className="justify-center py-[1rem] z-50 w-full">
        <Header />
      </Flex>

      <Box as="main" className="p-8 ">
        <Outlet />
      </Box>
      <Box as="footer" className="p-10 h-[10rem] flex items-end justify-end">
        <Text className="text-slate-500">{"ForestLake@2024"}</Text>
      </Box>
    </Stack>
  );
};
export default MainLayout;
