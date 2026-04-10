import { SimpleGrid } from "@chakra-ui/react";

import ProjectListItem from "./ProjectListItem";
import { Project, PROJECTS } from "../config/projects";

const ProjectList: React.FC = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={2}>
      {PROJECTS.map((repo: Project) => (
        <ProjectListItem key={repo.url} project={repo} />
      ))}
    </SimpleGrid>
  );
};

export default ProjectList;
