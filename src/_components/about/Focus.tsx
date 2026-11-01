import { Text, useColorModeValue } from "@chakra-ui/react";
import HomeSection from "../home/HomeSection";
import { hoverSidelined } from "../ui/CommonStyles";
import { FOCUS_AREAS, SKILLS } from "../../config/metadata";
import { FocusArea, Technology } from "../../interfaces/About";

const Focus: React.FC = () => {
  const lineColor = useColorModeValue("border-black/20", "border-white/20");

  return (
    <HomeSection id="Focus" title="What I work on">
      <div className="grid gap-10 md:grid-cols-3 md:gap-6">
        {FOCUS_AREAS.map((area: FocusArea, index: number) => (
          <article
            key={`focus__${area.title}`}
            className={`relative flex flex-col gap-3 px-4 py-2 ${hoverSidelined}`}
          >
            <span className="font-serif text-sm lining-nums opacity-50">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-serif text-2xl">{area.title}</h3>
            <Text className="text-sm leading-relaxed opacity-70">
              {area.description}
            </Text>
            <ul className="mt-2 flex flex-wrap gap-2">
              {SKILLS.filter((item: Technology) =>
                area.skills.includes(item.name),
              ).map((item: Technology) => (
                <li
                  key={`focus__${area.title}__${item.name}`}
                  className={`flex items-center gap-2 border px-3 py-2 text-xs transition-colors hover:border-blue-500 ${lineColor}`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </HomeSection>
  );
};

export default Focus;
