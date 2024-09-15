import BlogItemCard from "./BlogItemCard";
import blogs from "../../config/blogs.json";
import { SimpleGrid } from "@chakra-ui/react";

const FeaturedBlogs: React.FC = () => {
  return (
    <SimpleGrid spacing={2} columns={{ base: 1, md: 3 }}>
      {blogs.slice(0, 3).map((blog: Blog) => (
        <BlogItemCard key={`featured_blog__${blog.title}`} blog={blog} />
      ))}
    </SimpleGrid>
  );
};
export default FeaturedBlogs;
