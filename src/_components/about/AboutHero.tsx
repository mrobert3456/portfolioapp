import { Button, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Markdown from "react-markdown";
import BIO from "../../config/bio.md?raw";
import { INTRO, YEARS_OF_EXPERIENCE } from "../../config/metadata";
import profileImg from "../../assets/profile.jpg";
import CustomCardContainer from "../ui/CustomCardContainer";
import { buttonStyle, fadeUp, primaryButtonStyle } from "../ui/CommonStyles";
import Websites from "../Websites";
import { useContext } from "react";
import { ChatContext } from "../layout/Mainlayout";

const DETAILS = [
  { label: "Role", value: INTRO.role },
  { label: "Company", value: INTRO.company },
  { label: "Location", value: INTRO.location },
];

const AboutHero: React.FC = () => {
  const lineColor = useColorModeValue("border-black/10", "border-white/10");
  const { onToggle } = useContext(ChatContext)!;
  return (
    <section
      id="Introduction"
      className="grid items-center gap-12 lg:min-h-[60vh] lg:grid-cols-[3fr_2fr]"
    >
      <div className="flex flex-col items-start gap-6">
        <div className={`flex items-center gap-3 ${fadeUp}`}>
          <span className="w-10 border-t-2 border-blue-500" />
          <Text className="text-xs uppercase tracking-[0.25em] opacity-70">
            About me
          </Text>
        </div>

        <h1
          className={`font-serif text-4xl leading-tight md:text-6xl ${fadeUp} [animation-delay:100ms]`}
        >
          From web applications to computer vision
        </h1>

        <div
          className={`flex max-w-[34rem] flex-col gap-4 text-base leading-relaxed opacity-80 md:text-lg ${fadeUp} [animation-delay:200ms]`}
        >
          <Markdown>{BIO}</Markdown>
        </div>

        <div className={`${fadeUp} [animation-delay:400ms]`}>
          <Websites />
        </div>
      </div>

      <div className={`${fadeUp} [animation-delay:300ms] `}>
        <CustomCardContainer className="mx-auto w-full max-w-sm !gap-4 !p-8">
          <div className="flex w-full flex-row items-center gap-6 text-center">
            <Image
              src={profileImg}
              alt={`Portrait of ${INTRO.name}`}
              className="rounded-full"
              height={100}
              width={100}
            />
            <dl className="flex flex-col-reverse gap-1">
              <dt className="text-xs opacity-60">Years of experience</dt>
              <dd className="font-serif text-4xl lining-nums md:text-5xl">
                {YEARS_OF_EXPERIENCE}
              </dd>
            </dl>
          </div>
          <Text className="w-full font-serif text-2xl">{INTRO.name}</Text>
          <dl
            className={`w-full max-w-[34rem] border-t ${lineColor} ${fadeUp} [animation-delay:300ms]`}
          >
            {DETAILS.map((detail) => (
              <div
                key={`detail__${detail.label}`}
                className={`flex justify-between gap-4 border-b py-3 text-sm ${lineColor}`}
              >
                <dt className="opacity-60">{detail.label}</dt>
                <dd className="text-right">{detail.value}</dd>
              </div>
            ))}
          </dl>
          <div className="flex w-full gap-1">
            <Button
              as={Link}
              to="/contact"
              className={`!w-full ${primaryButtonStyle}`}
              flex="0.5"
            >
              Contact me
            </Button>
            <Button onClick={onToggle} className={buttonStyle} flex="0.5">
              Ask the assistant
            </Button>
          </div>
        </CustomCardContainer>
      </div>
    </section>
  );
};

export default AboutHero;
