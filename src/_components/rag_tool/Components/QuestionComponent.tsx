import { Box, Icon, Image, Tooltip, useColorModeValue } from "@chakra-ui/react";
import { ComponentTypeProps } from "../../../interfaces/Chat";
import Markdown from "react-markdown";
import blogs from "../../../config/blogs.json";
import { GoCopy } from "react-icons/go";
import { hoverImgScaling } from "../../ui/CommonStyles";

const QuestionComponent: React.FC<ComponentTypeProps> = ({ message, role }) => {
  const linkColor = useColorModeValue("#0f62fe", "#a6c8ff");
  const userMessageBg = useColorModeValue("!bg-sky-300", "!bg-sky-800");
  const assistantMessageBg = useColorModeValue(
    "!bg-slate-300",
    "!bg-slate-800",
  );
  return (
    <Box
      className={`p-2 flex justify-between  rounded-lg break-words  ${role == "assistant" ? assistantMessageBg : userMessageBg} ${role == "assistant" ? "rounded-tl-sm" : "rounded-tr-sm"}`}
    >
      <div>
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
      </div>
      {role === "assistant" && (
        <Tooltip label="Copy">
          <div
            className={`self-end hover:cursor-pointer ${hoverImgScaling}`}
            onClick={() => navigator.clipboard.writeText(message as string)}
          >
            <GoCopy size={16} />
          </div>
        </Tooltip>
      )}
    </Box>
  );
};

export default QuestionComponent;
