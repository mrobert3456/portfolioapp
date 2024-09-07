import { Card, CardBody, Flex } from "@chakra-ui/react";
import Metadata from "./Metadata";
import Bio from "./Bio";
import Certificates from "./Certificates";
import Educations from "./Educations";

const AboutCard: React.FC = () => {
  return (
    <Card className="!rounded-none ">
      <CardBody className="flex flex-col gap-5 flex-wrap">
        <Flex className="gap-10 flex-wrap">
          <Metadata />
          <Bio />
        </Flex>
        <Flex className="gap-10 flex-wrap">
          <Certificates />
          <Educations />
        </Flex>
      </CardBody>
    </Card>
  );
};

export default AboutCard;
