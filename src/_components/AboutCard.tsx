import { Card, CardBody, Flex } from "@chakra-ui/react";
import Metadata from "./Metadata";
import Bio from "./Bio";
import Certificates from "./Certificates";
import Educations from "./Educations";

const AboutCard: React.FC = () => {
  return (
    <Card id="about__card" className="!rounded-none ">
      <CardBody className="flex flex-col gap-5 flex-wrap">
        <Flex id="metadata__items" className="gap-10 flex-wrap">
          <Metadata />
          <Bio />
        </Flex>
        <Flex id="education__items" className="gap-10 flex-wrap">
          <Certificates />
          <Educations />
        </Flex>
      </CardBody>
    </Card>
  );
};

export default AboutCard;
