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
  Link,
} from "@chakra-ui/react";
import { hoverImgScaling, hoverUnderlined } from "./CommonStyles";
interface BlogItemCardProps {
  blog: Blog;
  cardProps?: CardProps;
}
const BlogItemCard: React.FC<BlogItemCardProps> = ({ blog, cardProps }) => {
  return (
    <Card
      as={Link}
      href={blog.link}
      target="_blank"
      className={`!rounded-none !max-w-[15rem] !min-w-[15rem] ${hoverUnderlined} cursor-pointer !no-underline `}
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
            <Icon as={Image} src={blog.icon} className={hoverImgScaling} />
            <Text className="text-xs">{blog.publisher}</Text>
          </Flex>
          <Text className="text-xs text-right">{blog.date}</Text>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default BlogItemCard;
