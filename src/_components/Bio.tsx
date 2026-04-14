import { Heading, Stack } from "@chakra-ui/react";
import BIO from "../config/bio.md?raw";
import Markdown from "react-markdown";

const Bio: React.FC = () => {
  return (
    <Stack id="Bio" className="max-w-[40rem]">
      <Heading as="h1" className="!text-sm">
        Bio
      </Heading>
      <Markdown>{BIO}</Markdown>
    </Stack>
  );
};

export default Bio;
