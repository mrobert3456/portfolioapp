import { Heading, Stack, Tooltip } from "@chakra-ui/react";
import { SKILLS } from "../config/metadata";
import { Technology } from "../interfaces/About";
const Skills: React.FC = () => {
  return (
    <Stack id="metadata">
      <Heading as="h1" className="!text-sm">
        Skills
      </Heading>

      <div className="flex gap-2">
        {SKILLS.map((item: Technology) => (
          <Tooltip key={`skill__${item.name}`} label={item.name}>
            <div className="flex justify-center items-center w-9 h-9 ring-1">
              <item.icon className="w-5 h-5" />
            </div>
          </Tooltip>
        ))}
      </div>
    </Stack>
  );
};

export default Skills;
