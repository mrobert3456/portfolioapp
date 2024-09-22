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
    <SimpleGrid id={id} className="gap-5 h-full">
      <div className="flex justify-end sm:hidden !h-max">
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
