import { SimpleGrid, Flex } from "@chakra-ui/react";
import blogs from "../config/blogs.json";
import BlogItemCard from "../_components/ui/BlogItemCard";
import CustomCardContainer from "../_components/ui/CustomCardContainer";
const Blogs: React.FC = () => {
  return (
    <SimpleGrid id="Blogs" className="h-full">
      <Flex className="justify-center items-center gap-2 flex-wrap">
        <CustomCardContainer>
          {blogs.map((blog: Blog) => (
            <BlogItemCard key={`featured_blog__${blog.title}`} blog={blog} />
          ))}
        </CustomCardContainer>
      </Flex>
    </SimpleGrid>
  );
};

export default Blogs;
