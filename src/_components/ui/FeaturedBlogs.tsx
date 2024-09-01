import BlogItemCard from "./BlogItemCard";
import blogs from "../../config/blogs.json";
import { Flex } from "@chakra-ui/react";

const FeaturedBlogs: React.FC = () => {
  return (
    <Flex className="gap-2 mt-10 justify-center flex-wrap">
      {blogs.slice(0, 3).map((blog: Blog) => (
        <BlogItemCard key={`featured_blog__${blog.title}`} blog={blog} />
      ))}
    </Flex>
  );
};
export default FeaturedBlogs;
