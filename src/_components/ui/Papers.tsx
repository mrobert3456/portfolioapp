import { Stack, Heading, Flex, Image, Link, Text } from "@chakra-ui/react";
import { hoverImgScaling } from "./CommonStyles";

interface PaperProps {
  id?: string;
  title: string;
  papers: Certificate[];
  showDetails?: boolean;
}

const Papers: React.FC<PaperProps> = ({
  id,
  title,
  papers,
  showDetails = false,
}) => {
  return (
    <Stack id={id} className="gap-2">
      <Heading as="h1" className="!text-sm">
        {title}
      </Heading>

      <Flex className="gap-5">
        {papers.map((item: Certificate) => (
          <Flex className="gap-3">
            <Link
              className="flex gap-2 !no-underline"
              aria-label={item.title}
              href={item.url}
              target="_blank"
            >
              <Image
                className={hoverImgScaling}
                height={70}
                width={70}
                alt={item.alt}
                src={item.img}
              />
            </Link>
            {showDetails && (
              <Stack>
                <Text className="text-xs ">{item.institution}</Text>
                <Text className="text-xs">{item.title}</Text>
                <Text className="text-xs">Grade: {item.grade}</Text>
              </Stack>
            )}
          </Flex>
        ))}
      </Flex>
    </Stack>
  );
};

export default Papers;
