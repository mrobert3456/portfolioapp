import { Heading, Stack, Text } from "@chakra-ui/react";
import { BIO } from "../config/metadata";

const Bio: React.FC = () => {
  return (
    <Stack>
      <Heading as="h1" className="!text-sm">
        Bio
      </Heading>
      <Text as="p" className="text-sm max-w-[25rem]">
        {BIO}
      </Text>
    </Stack>
  );
};

export default Bio;
