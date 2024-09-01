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
import { hoverUnderlined } from "./CommonStyles";
interface BlogItemCardProps {
  blog: Blog;
}
const BlogItemCard: React.FC<BlogItemCardProps> = ({ blog }) => {
  const handleClick = () => {
    window.open(blog.link, "_blank");
  };
  return (
    <Card
      className={`!rounded-none max-w-[15rem] ${hoverUnderlined} cursor-pointer `}
      onClick={handleClick}
    >
      <CardBody>
        <Stack>
          <Heading size="sm">{blog.title}</Heading>
          <Text className="text-xs">{blog.summary}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Flex className="!justify-between w-full">
          <Flex className="items-center gap-2 ">
            <Icon
              as={Image}
              src={blog.icon}
              className="transition-all duration-200 ease-in hover:scale-150"
            />
            <Text className="text-xs">{blog.publisher}</Text>
          </Flex>
          <Link
            href={blog.link}
            target="_blank"
            className="transition-all duration-200 ease-in hover:scale-150"
          >
            <RxExternalLink size={16} />
          </Link>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default BlogItemCard;
