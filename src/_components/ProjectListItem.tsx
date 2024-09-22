import {
  Text,
  Flex,
  Stack,
  Heading,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";
import { hoverUnderlined } from "./ui/CommonStyles";

interface ProjectListItemProps {
  repository: Repository;
}
const ProjectListItem: React.FC<ProjectListItemProps> = ({ repository }) => {
  const bgColor = useColorModeValue("bg-white", "bg-[#2D3748]");
  const handleClick = () => {
    window.open(repository.html_url, "_blank");
  };
  return (
    <Stack
      as="li"
      className={`relative p-3 ${bgColor} ${hoverUnderlined} hover:cursor-pointer max-w-[40rem] `}
      onClick={handleClick}
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
