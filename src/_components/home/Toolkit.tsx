import { useColorModeValue } from "@chakra-ui/react";
import HomeSection from "./HomeSection";
import { SKILLS } from "../../config/metadata";
import { Technology } from "../../interfaces/About";

const Toolkit: React.FC = () => {
  const lineColor = useColorModeValue("border-black/20", "border-white/20");

  return (
    <HomeSection id="Toolkit" title="Toolkit">
      <ul className="flex flex-wrap gap-2">
        {SKILLS.map((item: Technology) => (
          <li
            key={`toolkit__${item.name}`}
            className={`flex items-center gap-2 border px-3 py-2 text-xs transition-colors hover:border-blue-500 ${lineColor}`}
          >
            <item.icon className="h-4 w-4" />
            {item.name}
          </li>
        ))}
      </ul>
    </HomeSection>
  );
};

export default Toolkit;
