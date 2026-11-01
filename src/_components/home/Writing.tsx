import HomeListItem from "./HomeListItem";
import HomeSection from "./HomeSection";
import { BLOGS } from "../../config/metadata";
import { Blog } from "../../interfaces/Blog";

const Writing: React.FC = () => {
  return (
    <HomeSection
      id="Featured"
      title="Writing"
      linkLabel="All blogs"
      linkTo="/blogs"
    >
      <div className="flex flex-col">
        {BLOGS.slice(0, 3).map((blog: Blog, index: number) => (
          <HomeListItem
            key={`featured_blog__${blog.title}`}
            index={index}
            title={blog.title}
            subtitle={blog.summary}
            details={`${blog.publisher} · ${blog.date}`}
            url={blog.link}
          />
        ))}
      </div>
    </HomeSection>
  );
};

export default Writing;
