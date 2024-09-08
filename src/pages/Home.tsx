import {
  Text,
  Flex,
  SimpleGrid,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import FeaturedBlogs from "../_components/ui/FeaturedBlogs";
import CustomCardContainer from "../_components/ui/CustomCardContainer";

const Home: React.FC = () => {
  const borderColor = useColorModeValue("border-black", "border-white");
  return (
    <SimpleGrid id="Home" className="h-full">
      <Flex
        id="Introduction"
        className="flex-col justify-center items-center gap-5"
      >
        <Text className="font-serif text-3xl text-center ">
          Hello, I'm Robert Meszaros
          <span className={`border-r-2 animate-blink ${borderColor}`}>
            &nbsp;
          </span>
          <Text className="text-sm text-center">
            I am a Full Stack developer
          </Text>
        </Text>
        <Button
          className={`!w-20 !rounded-none !text-xs !border-2 !border-sky-500 !bg-transparent hover:!border-sky-700`}
        >
          Contact me
        </Button>
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
