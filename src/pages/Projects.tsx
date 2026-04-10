import { Stack } from "@chakra-ui/react";
import ProjectList from "../_components/ProjectList";
import PageLayout from "../_components/layout/PageLayout";

const Projects: React.FC = () => {
  return (
    <PageLayout id="Projects" homeNavigation>
      <div className="flex justify-center">
        <Stack className="max-w-[50%] !items-center  sm:items-center ">
          <h1 className="self-start ">Projects</h1>
          <ProjectList />
        </Stack>
      </div>
    </PageLayout>
  );
};

export default Projects;
