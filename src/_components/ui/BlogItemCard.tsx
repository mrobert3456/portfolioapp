import {
  Text,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Icon,
  Image,
  Flex,
  Link,
} from "@chakra-ui/react";
import { RxExternalLink } from "react-icons/rx";
interface BlogItemCardProps {
  blog: Blog;
}
const BlogItemCard: React.FC<BlogItemCardProps> = ({ blog }) => {
  return (
    <Card className="!rounded-none">
      <CardBody>
        <Stack>
          <Heading size="md">{blog.title}</Heading>
          <Text>{blog.summary}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Flex className="!justify-between w-full">
          <Flex className="items-center gap-2">
            <Icon as={Image} src={blog.icon} />
            <Text className="text-xs">{blog.publisher}</Text>
          </Flex>
          <Link href={blog.link} target="_blank">
            <RxExternalLink size={16} />
          </Link>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default BlogItemCard;
