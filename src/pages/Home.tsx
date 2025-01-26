import {
  Text,
  Flex,
  SimpleGrid,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import FeaturedBlogs from "../_components/ui/FeaturedBlogs";
import CustomCardContainer from "../_components/ui/CustomCardContainer";
import { useNavigate } from "react-router-dom";
import { buttonStyle } from "../_components/ui/CommonStyles";

const Home: React.FC = () => {
  const borderColor = useColorModeValue("border-black", "border-white");

  const navigate = useNavigate();
  return (
    <SimpleGrid id="Home" className="h-full">
      <Flex
        id="Introduction"
        className="flex-col justify-center items-center gap-5"
      >
        <div className="font-serif text-3xl text-center ">
          Hello, I'm Robert Meszaros
          <span className={`border-r-2 animate-blink ${borderColor}`}>
            &nbsp;
          </span>
          <Text className="text-sm text-center">
            I am a Full Stack developer
          </Text>
        </div>
        <div className="flex gap-2">
          <Button
            className={`!w-20 ${buttonStyle}`}
            onClick={() => navigate("/contact")}
          >
            Contact me
          </Button>

          <Button
            className={`!w-20 ${buttonStyle}`}
            onClick={() => navigate("/chat")}
          >
            Let's chat
          </Button>
        </div>
      </Flex>

      <Flex id="Featured" className="flex-col">
        <Flex className="mt-10 justify-center">
          <CustomCardContainer>
            <FeaturedBlogs />
          </CustomCardContainer>
        </Flex>
      </Flex>
    </SimpleGrid>
  );
};

export default Home;
