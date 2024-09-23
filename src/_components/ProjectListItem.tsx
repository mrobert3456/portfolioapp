import {
  Text,
  Flex,
  Stack,
  Heading,
  Tag,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { hoverUnderlined } from "./ui/CommonStyles";

interface ProjectListItemProps {
  repository: Repository;
}
const ProjectListItem: React.FC<ProjectListItemProps> = ({ repository }) => {
  const bgColor = useColorModeValue("bg-white", "bg-[#2D3748]");

  return (
    <Stack
      as={Link}
      href={repository.html_url}
      target="_blank"
      className={`relative p-3 ${bgColor} ${hoverUnderlined} hover:cursor-pointer max-w-[40rem] !no-underline`}
    >
      <Heading size="sm">{repository.name}</Heading>
      <Text className="text-xs">{repository.description}</Text>
      <Flex className="gap-2 flex-wrap">
        {repository.topics.map((topic: string) => (
          <Tag size="sm" key={topic} colorScheme="blue">
            {topic}
          </Tag>
        ))}
      </Flex>

      <Flex className="justify-between">
        <Text className="text-xs">{repository.language}</Text>
        <Text className="text-xs">{repository.created_at.split("T")[0]}</Text>
      </Flex>
    </Stack>
  );
};

export default ProjectListItem;
