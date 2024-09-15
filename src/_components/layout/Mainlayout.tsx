import { Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import useNavigation from "../../hooks/useNavigation";

const MainLayout: React.FC = () => {
  const { customRoutes, pageRef } = useNavigation();
  return (
    <Stack
      h="100vh"
      className={`relative !overflow-hidden ${useColorModeValue(
        " bg-gradient-to-tr from-gray-200",
        " bg-gradient-to-tr from-black"
      )}`}
    >
      <Header routes={customRoutes} />

      <main className="p-8 z-10 mt-20 overflow-y-auto h-full">
        <div ref={pageRef} />
        <Outlet />
      </main>

      <footer className="p-4 h-[5rem] flex items-start justify-end">
        <Text className="text-slate-500">{"ForestLake@2024"}</Text>
      </footer>
    </Stack>
  );
};
export default MainLayout;
