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

const Metadata: React.FC = () => {
  return (
    <Stack>
      <Heading as="h1" className="!text-sm">
        Information
      </Heading>

      <Flex className="gap-10">
        <Image className="hidden md:block" src="" height={50} width={50} />

        <Stack className="!gap-5">
          <SimpleGrid columns={2}>
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
