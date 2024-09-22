import { Flex } from "@chakra-ui/react";
import ProjectList from "../_components/ProjectList";
import PageLayout from "../_components/layout/PageLayout";

const Projects: React.FC = () => {
  return (
    <PageLayout id="Projects">
      <Flex className="justify-center items-center">
        <ProjectList />
      </Flex>
    </PageLayout>
  );
};

export default Projects;
