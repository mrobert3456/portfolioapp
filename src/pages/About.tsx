import { Flex } from "@chakra-ui/react";
import AboutCard from "../_components/AboutCard";
import CustomCardContainer from "../_components/ui/CustomCardContainer";
import PageLayout from "../_components/layout/PageLayout";

const About: React.FC = () => {
  return (
    <PageLayout id="About" homeNavigation>
      <Flex className="justify-center items-center">
        <CustomCardContainer>
          <AboutCard />
        </CustomCardContainer>
      </Flex>
    </PageLayout>
  );
};

export default About;
