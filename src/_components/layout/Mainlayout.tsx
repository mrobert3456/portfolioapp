import { Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainLayout: React.FC = () => {
  return (
    <Stack
      h="100vh"
      className={`relative overflow-hidden ${useColorModeValue(
        " bg-gradient-to-tr from-gray-200",
        " bg-gradient-to-tr from-black"
      )}`}
    >
      <Header />

      <main className="p-8 z-10 mt-16 overflow-auto h-full">
        <Outlet />
      </main>

      <footer className="p-4 h-[5rem] flex items-start justify-end">
        <Text className="text-slate-500">{"ForestLake@2024"}</Text>
      </footer>
    </Stack>
  );
};
export default MainLayout;
