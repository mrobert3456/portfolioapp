import { Stack } from "@chakra-ui/react";
import ProjectList from "../_components/ProjectList";
import PageLayout from "../_components/layout/PageLayout";

const Projects: React.FC = () => {
  return (
    <PageLayout id="Projects" homeNavigation>
      <div className="flex justify-center">
        <Stack className="max-w-[70%] !items-center  sm:items-center ">
          <h1 className="self-start text-3xl">Projects</h1>
          <h3 className="self-start text-md opacity-80">
            List of projects that I worked on or working on.
          </h3>
          <ProjectList />
        </Stack>
      </div>
    </PageLayout>
  );
};

export default Projects;
