import HomeListItem from "./HomeListItem";
import HomeSection from "./HomeSection";
import { Project, PROJECTS } from "../../config/projects";
import { Technology } from "../../interfaces/About";

const SelectedProjects: React.FC = () => {
  return (
    <HomeSection
      id="SelectedProjects"
      title="Selected work"
      linkLabel="All projects"
      linkTo="/projects"
    >
      <div className="flex flex-col">
        {PROJECTS.slice(0, 3).map((project: Project, index: number) => (
          <HomeListItem
            key={`selected_project__${project.title}`}
            index={index}
            title={project.title}
            subtitle={project.subtitle}
            details={project.technologies
              .map((item: Technology) => item.name)
              .join(" · ")}
            url={project.url}
          />
        ))}
      </div>
    </HomeSection>
  );
};

export default SelectedProjects;
