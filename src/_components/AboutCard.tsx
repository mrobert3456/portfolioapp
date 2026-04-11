import { Card, CardBody, Flex } from "@chakra-ui/react";
import Metadata from "./Metadata";
import Bio from "./Bio";
import Certificates from "./Certificates";
import Educations from "./Educations";
import Skills from "./Skills";

const AboutCard: React.FC = () => {
  return (
    <Card id="about__card" className="!rounded-none">
      <CardBody className="flex flex-col gap-5 flex-wrap w-full">
        <Flex id="metadata__items" className="gap-10 flex-wrap">
          <Metadata />
          <Bio />
        </Flex>

        <Certificates />
        <Educations />
        <Flex id="metadata__skill" className="gap-10 flex-wrap">
          <Skills />
        </Flex>
      </CardBody>
    </Card>
  );
};

export default AboutCard;
