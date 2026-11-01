import { Button, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ChatContext } from "../layout/Mainlayout";
import { buttonStyle, primaryButtonStyle } from "../ui/CommonStyles";

const ClosingCta: React.FC = () => {
  const { onToggle } = useContext(ChatContext)!;

  return (
    <section
      id="ClosingCta"
      className="flex flex-col items-center gap-5 py-8 text-center"
    >
      <h2 className="font-serif text-3xl md:text-4xl">Let's work together</h2>
      <Text className="max-w-[30rem] text-sm leading-relaxed opacity-70">
        Send me a message, or ask the ForestLake Assistant about my career,
        projects and blogs.
      </Text>
      <div className="flex flex-wrap justify-center gap-3">
        <Button as={Link} to="/contact" className={primaryButtonStyle}>
          Contact me
        </Button>
        <Button onClick={onToggle} className={buttonStyle}>
          Ask the assistant
        </Button>
      </div>
    </section>
  );
};

export default ClosingCta;
