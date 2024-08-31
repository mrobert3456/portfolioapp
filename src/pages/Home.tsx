import { Text, Flex, SimpleGrid } from "@chakra-ui/react";

const Home: React.FC = () => {
  return (
    <SimpleGrid id="Home" className="h-full">
      <Flex className="justify-center items-center">
        <Text className="font-serif text-3xl">
          🚀 Hello, I'm Robert Meszaros, and I am a full-stack developer
        </Text>
      </Flex>
    </SimpleGrid>
  );
};

export default Home;
