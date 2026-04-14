import { SimpleGrid } from "@chakra-ui/react";

import ProjectListItem from "./ProjectListItem";
import { Project, PROJECTS } from "../config/projects";

const ProjectList: React.FC = () => {
  return (
    <SimpleGrid
      className="justify-center w-full sm:[grid-template-columns:repeat(auto-fit,minmax(415px,0))]"
      spacing={2}
      alignItems="stretch"
    >
      {PROJECTS.map((repo: Project) => (
        <ProjectListItem key={repo.url} project={repo} />
      ))}
    </SimpleGrid>
  );
};

export default ProjectList;
