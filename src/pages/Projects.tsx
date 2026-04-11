import { Heading, Stack, Text } from "@chakra-ui/react";
import ProjectList from "../_components/ProjectList";
import PageLayout from "../_components/layout/PageLayout";

const Projects: React.FC = () => {
  return (
    <PageLayout id="Projects" homeNavigation>
      <div className="flex justify-center">
        <Stack className="max-w-[70%] !items-center sm:items-center ">
          <div className="flex flex-col self-start">
            <Heading>Projects</Heading>
            <Text className="self-start text-md opacity-80">
              List of projects that I worked on or working on.
            </Text>
          </div>
          <ProjectList />
        </Stack>
      </div>
    </PageLayout>
  );
};

export default Projects;
