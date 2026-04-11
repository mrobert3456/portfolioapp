import {
  Text,
  Stack,
  Heading,
  useColorModeValue,
  Link,
  Card,
  CardFooter,
  CardBody,
  Tooltip,
} from "@chakra-ui/react";
import { useState } from "react";
import { BlogReference, Project } from "../config/projects";
import blogs from "../config/blogs.json";
import { GoLinkExternal } from "react-icons/go";
import { BsPostcard } from "react-icons/bs";
import { Technology } from "../interfaces/About";

interface ProjectListItemProps {
  project: Project;
}

const ProjectListItem: React.FC<ProjectListItemProps> = ({ project }) => {
  const bgColor = useColorModeValue("bg-white", "bg-[#2D3748]");
  const [expanded, setExpanded] = useState(false);
  const hoverCard = `
            transition-all duration-300 ease-out
            hover:shadow-xl
            hover:ring-1 hover:ring-blue-500
            `;

  const visibleBlogs = project?.blogs
    ? expanded
      ? project.blogs
      : project.blogs.slice(0, 3)
    : [];

  return (
    <Card
      className={`
        group
        relative 
        p-4 
        ${bgColor}
        ${hoverCard}
        !no-underline
        aspect-square
        justify-between
        !rounded-none
        border border-transparent
        hover:border-blue-500/30
      `}
    >
      <CardBody className="flex flex-col gap-3 !h-full">
        {/* top content */}
        <Stack className="gap-1 justify-center">
          <Heading
            as={Link}
            href={project.url}
            target="_blank"
            size="sm"
            className="
              flex items-center gap-1
              line-clamp-2
              transition-colors
              hover:text-blue-500
              w-fit
            "
          >
            {project.title}
            <div>
              <GoLinkExternal size={14} className="opacity-60  transition" />
            </div>
          </Heading>

          <Text className="text-xs line-clamp-2 opacity-80">
            {project.description}
          </Text>
        </Stack>

        {/* related posts */}
        {visibleBlogs.length > 0 && (
          <Stack className="gap-1 mt-1">
            <div className="flex gap-2 items-center">
              <BsPostcard />
              <Text className="text-xs font-semibold opacity-70">
                Related posts
              </Text>
            </div>

            {visibleBlogs.map((id: BlogReference) => {
              const blog = blogs.find((item) => item.id === id);

              return (
                <Link
                  key={blog?.link}
                  href={blog?.link}
                  target="_blank"
                  className="
                  text-xs
                  truncate
                  opacity-80
                  hover:text-blue-500
                  transition-colors
                  
                "
                >
                  {blog?.title}
                </Link>
              );
            })}

            {visibleBlogs.length > 3 && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="
                  text-xs
                  text-blue-500
                  hover:underline
                  w-fit
                "
              >
                {expanded ? "Show less" : "Show more"}
              </button>
            )}
          </Stack>
        )}
      </CardBody>

      <CardFooter>
        <div className="flex flex-wrap gap-3">
          {project.technologies.map((item: Technology) => (
            <Tooltip key={item.name} label={item.name}>
              <div className="flex justify-center items-center w-9 h-9 ring-1">
                <item.icon className="w-5 h-5" />
              </div>
            </Tooltip>
          ))}
        </div>
      </CardFooter>

      {/* glow overlay */}
      <div className="absolute inset-0 rounded-none opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-tr from-blue-500/5 to-transparent" />
    </Card>
  );
};

export default ProjectListItem;
