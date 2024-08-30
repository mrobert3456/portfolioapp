import { Box, Stack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainLayout: React.FC = () => {
  return (
    <Stack h="100vh" w="100%">
      <Header />

      <Box as="main" px="2rem" py={"4rem"} h="100%">
        <Outlet />
      </Box>
    </Stack>
  );
};
export default MainLayout;
