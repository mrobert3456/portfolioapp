import { Flex } from "@chakra-ui/react";
import blogs from "../config/blogs.json";
import BlogItemCard from "../_components/ui/BlogItemCard";
import PageLayout from "../_components/layout/PageLayout";
const Blogs: React.FC = () => {
  return (
    <PageLayout id="Blogs">
      <Flex className="justify-center items-center gap-2 flex-wrap">
        {blogs.map((blog: Blog) => (
          <BlogItemCard key={`featured_blog__${blog.title}`} blog={blog} />
        ))}
      </Flex>
    </PageLayout>
  );
};

export default Blogs;
