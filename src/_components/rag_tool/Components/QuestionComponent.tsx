import { Box, Icon, Image, useColorModeValue } from "@chakra-ui/react";
import { ComponentTypeProps } from "../../../interfaces/Chat";
import Markdown from "react-markdown";
import blogs from "../../../config/blogs.json";

const QuestionComponent: React.FC<ComponentTypeProps> = ({ message, role }) => {
  const linkColor = useColorModeValue("#0f62fe", "#a6c8ff");
  const userMessageBg = useColorModeValue("!bg-sky-300", "!bg-sky-800");
  const assistantMessageBg = useColorModeValue(
    "!bg-slate-300",
    "!bg-slate-800",
  );
  return (
    <Box
      className={`p-2 rounded-lg break-words  ${role == "assistant" ? assistantMessageBg : userMessageBg} ${role == "assistant" ? "rounded-tl-sm" : "rounded-tr-sm"}`}
    >
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
        {message as string}
      </Markdown>
    </Box>
  );
};

export default QuestionComponent;
