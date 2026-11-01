import ProjectList from "../_components/ProjectList";
import PageLayout from "../_components/layout/PageLayout";
import { fadeUp } from "../_components/ui/CommonStyles";
import PageTitle from "../_components/ui/PageTitle";

const Projects: React.FC = () => {
  return (
    <PageLayout id="Projects" homeNavigation>
      <PageTitle
        title="Projects"
        subtitle=" List of projects that I worked on or working on."
      />

      <div className={`mt-2 ${fadeUp}`}>
        <ProjectList />
      </div>
    </PageLayout>
  );
};

export default Projects;
