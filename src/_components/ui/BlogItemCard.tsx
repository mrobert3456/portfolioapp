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
  CardProps,
} from "@chakra-ui/react";
import { hoverUnderlined } from "./CommonStyles";
interface BlogItemCardProps {
  blog: Blog;
  cardProps?: CardProps;
}
const BlogItemCard: React.FC<BlogItemCardProps> = ({ blog, cardProps }) => {
  const handleClick = () => {
    window.open(blog.link, "_blank");
  };
  return (
    <Card
      className={`!rounded-none max-w-[15rem] ${hoverUnderlined} cursor-pointer `}
      onClick={handleClick}
      {...cardProps}
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
          <Text className="text-xs text-right">{blog.date}</Text>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default BlogItemCard;
