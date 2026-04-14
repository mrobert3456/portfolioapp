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
import { GoLinkExternal } from "react-icons/go";
import { BsPostcard } from "react-icons/bs";
import { Technology } from "../interfaces/About";
import { Blog } from "../interfaces/Blog";
import { BLOGS } from "../config/metadata";

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
        w-full
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

          <Text className="text-xs line-clamp-2 opacity-50">
            {project.subtitle}
          </Text>

          <ul className="flex flex-col gap-2 mt-1">
            {project.highlights?.map((item: string) => (
              <li
                key={item}
                className="relative pl-4 text-sm leading-relaxed text-dark-200
                before:content-[''] before:block before:absolute before:left-0
                before:top-[0.55rem] before:w-1.5 before:h-1.5
                before:bg-blue-500 before:rounded-full "
              >
                {item}
              </li>
            ))}
          </ul>
        </Stack>

        {/* related posts */}
        {visibleBlogs.length > 0 && (
          <Stack className="gap-1 mt-1">
            <div className="flex gap-2 items-center">
              <BsPostcard />
              <Text className="text-xs font-semibold opacity-70 ">
                Related posts
              </Text>
            </div>

            {visibleBlogs.map((id: BlogReference) => {
              const blog = BLOGS.find((item: Blog) => item.id === id);

              return (
                <div>
                  <Link
                    key={blog?.link}
                    href={blog?.link}
                    target="_blank"
                    className="
                          text-xs
                          truncate
                          hover:text-blue-500
                          transition-colors
                          opacity-70
                          p-1 "
                    style={{ border: "1px solid", textDecoration: "none" }}
                  >
                    {blog?.title}
                  </Link>
                </div>
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
        <div className="flex flex-wrap gap-3 mt-2">
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
