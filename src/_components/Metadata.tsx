import {
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import Websites from "./Websites";
import { INTRO } from "../config/metadata";
import profileImg from "../assets/profile.jpg";
import { hoverImgScaling } from "./ui/CommonStyles";
const Metadata: React.FC = () => {
  return (
    <Stack id="metadata">
      <Heading as="h1" className="!text-sm">
        Information
      </Heading>

      <Flex className="gap-10">
        <Image
          className={`hidden sm:block ${hoverImgScaling} rounded-full`}
          src={profileImg}
          height={70}
          width={70}
        />

        <Stack className="!gap-5">
          <SimpleGrid columns={2} gridTemplateColumns={"0.6fr 1fr"}>
            {Object.entries(INTRO).map(([key, value]) => (
              <>
                <Text className="capitalize text-sm">{key}</Text>
                <Text className="text-sm">{value}</Text>
              </>
            ))}
          </SimpleGrid>

          <Websites />
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Metadata;
