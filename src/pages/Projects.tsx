import { Heading, Text } from "@chakra-ui/react";
import ProjectList from "../_components/ProjectList";
import PageLayout from "../_components/layout/PageLayout";

const Projects: React.FC = () => {
  return (
    <PageLayout id="Projects" homeNavigation>
      <div className="flex flex-col self-start">
        <Heading>Projects</Heading>
        <Text className="self-start text-md opacity-80">
          List of projects that I worked on or working on.
        </Text>
      </div>

      <ProjectList />
    </PageLayout>
  );
};

export default Projects;
