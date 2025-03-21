import { Button, SimpleGrid, Stack } from "@chakra-ui/react";
import { buttonStyle } from "../ui/CommonStyles";
import { useNavigate } from "react-router-dom";

interface PageLayoutProps {
  id: string;
  homeNavigation?: boolean;
  children?: React.ReactNode;
}
const PageLayout: React.FC<PageLayoutProps> = ({
  id,
  children,
  homeNavigation = false,
}) => {
  const navigate = useNavigate();
  return (
    <Stack id={id} className="gap-5 h-full justify-center">
      {homeNavigation && (
        <div className="flex justify-end sm:hidden !h-max">
          <Button
            className={`!w-[10rem] ${buttonStyle} `}
            onClick={() => navigate("/")}
          >
            Back to Home page
          </Button>
        </div>
      )}
      <SimpleGrid className="!h-full">{children}</SimpleGrid>
    </Stack>
  );
};

export default PageLayout;
