import { SimpleGrid, Flex } from "@chakra-ui/react";
import AboutCard from "../_components/AboutCard";

const About: React.FC = () => {
  return (
    <SimpleGrid id="About" className="h-full">
      <Flex className="justify-center items-center">
        <AboutCard />
      </Flex>
    </SimpleGrid>
  );
};

export default About;
