import { Button, SimpleGrid } from "@chakra-ui/react";
import { buttonStyle } from "../ui/CommonStyles";
import { useNavigate } from "react-router-dom";

interface PageLayoutProps {
  id: string;
  children?: React.ReactNode;
}
const PageLayout: React.FC<PageLayoutProps> = ({ id, children }) => {
  const navigate = useNavigate();
  return (
    <SimpleGrid id={id} className="h-full gap-5">
      <div className="flex justify-end sm:hidden">
        <Button
          className={`!w-[10rem] ${buttonStyle} `}
          onClick={() => navigate("/")}
        >
          Back to Home page
        </Button>
      </div>
      {children}
    </SimpleGrid>
  );
};

export default PageLayout;
