import { Button, Text, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import CustomCardContainer from "../ui/CustomCardContainer";
import Websites from "../Websites";
import { buttonStyle, fadeUp, primaryButtonStyle } from "../ui/CommonStyles";
import {
  BLOGS,
  CERTS,
  INTRO,
  YEARS_OF_EXPERIENCE,
} from "../../config/metadata";
import { PROJECTS } from "../../config/projects";

const DETAILS = [
  { value: `${YEARS_OF_EXPERIENCE} years`, label: "Experience" },
  { value: INTRO.company, label: "Currently" },
  { value: INTRO.location, label: "Location" },
];

const STATS = [
  { value: PROJECTS.length, label: "Projects" },
  { value: BLOGS.length, label: "Publications" },
  { value: CERTS.length, label: "Certifications" },
];

const Hero: React.FC = () => {
  const borderColor = useColorModeValue("border-black", "border-white");
  const dividerColor = useColorModeValue("divide-black/10", "divide-white/10");

  return (
    <section
      id="Introduction"
      className="grid items-center gap-12 lg:min-h-[60vh] lg:grid-cols-[3fr_2fr]"
    >
      <div className="flex flex-col items-start gap-6">
        <div className={`flex items-center gap-3 ${fadeUp}`}>
          <span className="w-10 border-t-2 border-blue-500" />
          <Text className="text-xs uppercase tracking-[0.25em] opacity-70">
            {INTRO.role} at {INTRO.company}
          </Text>
        </div>

        <h1
          className={`font-serif text-5xl leading-tight md:text-7xl ${fadeUp} [animation-delay:100ms]`}
        >
          <span className="block text-2xl opacity-70 md:text-3xl">
            Hello, I'm
          </span>
          {INTRO.name}
          <span
            className={`ml-1 border-r-2 animate-blink motion-reduce:animate-none ${borderColor}`}
          >
            &nbsp;
          </span>
        </h1>

        <Text
          className={`max-w-[34rem] text-base leading-relaxed opacity-80 md:text-lg ${fadeUp} [animation-delay:200ms]`}
        >
          I build scalable, maintainable web applications and AI agents, with a
          keen interest in image processing.
        </Text>

        <div
          className={`flex flex-wrap items-center gap-3 ${fadeUp} [animation-delay:300ms]`}
        >
          <Button as={Link} to="/contact" className={primaryButtonStyle}>
            Contact me
          </Button>
          <Button as={Link} to="/projects" className={buttonStyle}>
            View projects
          </Button>
        </div>

        <div
          className={`flex flex-wrap items-center gap-6 ${fadeUp} [animation-delay:400ms]`}
        >
          <Websites />
          <Text className="flex items-center gap-2 text-sm opacity-70">
            <GoLocation />
            {INTRO.location}
          </Text>
        </div>
      </div>

      <div className={`${fadeUp} [animation-delay:300ms]`}>
        <CustomCardContainer className="w-full !p-0">
          <div className={`w-full divide-y ${dividerColor}`}>
            <dl className={`divide-y ${dividerColor}`}>
              {DETAILS.map((detail) => (
                <div
                  key={`detail__${detail.label}`}
                  className="flex items-center justify-between gap-4 px-6 py-4"
                >
                  <dt className="text-xs uppercase tracking-[0.25em] opacity-60">
                    {detail.label}
                  </dt>
                  <dd className="text-right font-medium">{detail.value}</dd>
                </div>
              ))}
            </dl>
            <dl className={`grid grid-cols-3 divide-x ${dividerColor}`}>
              {STATS.map((stat) => (
                <div
                  key={`stat__${stat.label}`}
                  className="flex flex-col-reverse items-center gap-1 px-2 py-6 text-center"
                >
                  <dt className="text-xs opacity-60">{stat.label}</dt>
                  <dd className="font-serif text-4xl lining-nums text-blue-300 md:text-5xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </CustomCardContainer>
      </div>
    </section>
  );
};

export default Hero;
