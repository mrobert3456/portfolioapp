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
import { Blog } from "../../interfaces/Blog";

interface DetailedBlogCardProps {
  blog: Blog;
  cardProps?: CardProps;
}
const DetailedBlogCard: React.FC<DetailedBlogCardProps> = ({
  blog,
  cardProps,
}) => {
  return (
    <Card
      as={Link}
      href={blog.link}
      target="_blank"
      className={`!rounded-none !max-w-[30rem] !min-w-[30rem] ${hoverUnderlined} cursor-pointer !no-underline`}
      {...cardProps}
    >
      <Flex className="w-full items-stretch">
        {/* LEFT SQUARE IMAGE (top-to-bottom) */}
        <div className="h-full aspect-square overflow-hidden">
          <Image
            height={200}
            width={200}
            src={blog.thumbnail}
            alt={blog.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <Flex direction="column" className="flex-1">
          <CardBody>
            <Stack>
              <Heading size="sm">{blog.title}</Heading>
              <Text className="text-xs">{blog.summary}</Text>
            </Stack>
          </CardBody>

          <CardFooter>
            <Flex className="!justify-between w-full">
              <Flex className="items-center gap-2">
                <Icon as={Image} src={blog.icon} className={hoverImgScaling} />
                <Text className="text-xs">{blog.publisher}</Text>
              </Flex>
              <Text className="text-xs text-right">{blog.date}</Text>
            </Flex>
          </CardFooter>
        </Flex>
      </Flex>
    </Card>
  );
};

export default DetailedBlogCard;
