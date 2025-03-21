import { Flex } from "@chakra-ui/react";
import ProjectList from "../_components/ProjectList";
import PageLayout from "../_components/layout/PageLayout";

const Projects: React.FC = () => {
  return (
    <PageLayout id="Projects" homeNavigation>
      <Flex className="justify-center items-start sm:items-center ">
        <ProjectList />
      </Flex>
    </PageLayout>
  );
};

export default Projects;
