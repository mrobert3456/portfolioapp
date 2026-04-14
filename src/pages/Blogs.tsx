import { Flex } from "@chakra-ui/react";
import PageLayout from "../_components/layout/PageLayout";
import { Blog } from "../interfaces/Blog";
import PageTitle from "../_components/ui/PageTitle";
import { BLOGS } from "../config/metadata";
import DetailedBlogCard from "../_components/ui/DetailedBlogCard";

const Blogs: React.FC = () => {
  return (
    <PageLayout id="Blogs" homeNavigation>
      <PageTitle title="Blogs" subtitle=" List of blogs that I've published." />

      <Flex className="gap-2 mt-2 flex-wrap">
        {BLOGS.map((blog: Blog) => (
          <DetailedBlogCard key={`featured_blog__${blog.title}`} blog={blog} />
        ))}
      </Flex>
    </PageLayout>
  );
};

export default Blogs;
