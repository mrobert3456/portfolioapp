import { SimpleGrid, Flex } from "@chakra-ui/react";
import AboutCard from "../_components/AboutCard";
import CustomCardContainer from "../_components/ui/CustomCardContainer";

const About: React.FC = () => {
  return (
    <SimpleGrid id="About" className="h-full">
      <Flex className="justify-center items-center">
        <CustomCardContainer>
          <AboutCard />
        </CustomCardContainer>
      </Flex>
    </SimpleGrid>
  );
};

export default About;
