import { Icon, Image, useColorModeValue } from "@chakra-ui/react";
import { ComponentTypeProps } from "../../../interfaces/Chat";
import Markdown from "react-markdown";
import blogs from "../../../config/blogs.json";

const QuestionComponent: React.FC<ComponentTypeProps> = ({ agentAnswer }) => {
  const linkColor = useColorModeValue("#0f62fe", "#a6c8ff");
  return (
    <Markdown
      components={{
        p: ({ node, ...props }) => {
          return <>{props.children}</>;
        },
        a: ({ node, ...props }) => {
          const blog = blogs.find((b: Blog) => b.link === props.href);
          if (!blog)
            return (
              <a
                className="markdown-link"
                style={{ color: linkColor }}
                href={props.href as string}
              >
                {props.children}
              </a>
            );

          return (
            <a
              className="markdown-link"
              style={{ color: linkColor }}
              href={props.href as string}
            >
              <Icon as={Image} src={blog.icon} className="mr-2" />
              {props.children}
            </a>
          );
        },
      }}
    >
      {agentAnswer.content as string}
    </Markdown>
  );
};

export default QuestionComponent;
