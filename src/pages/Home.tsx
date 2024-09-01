import { Text, Flex, SimpleGrid } from "@chakra-ui/react";
import FeaturedBlogs from "../_components/ui/FeaturedBlogs";

const Home: React.FC = () => {
  return (
    <SimpleGrid id="Home" className="h-full">
      <Flex className="justify-center">
        <Text className="font-serif text-3xl text-center">
          🚀 Hello, I'm Robert Meszaros
          <Text className="text-sm text-center">
            I am a full-stack developer
          </Text>
        </Text>
      </Flex>
      <Flex id="Featured" className="flex-col ">
        <Text className="text-left text-2xl">📖 Check out my latest blogs</Text>
        <Flex className="justify-center">
          {/* https://pagedone.io/docs/carousel */}
          <FeaturedBlogs />
        </Flex>
      </Flex>
    </SimpleGrid>
  );
};

export default Home;
