import Hero from "../_components/home/Hero";
import Toolkit from "../_components/home/Toolkit";
import SelectedProjects from "../_components/home/SelectedProjects";
import Writing from "../_components/home/Writing";

const Home: React.FC = () => {
  return (
    <div id="Home" className="mx-auto flex max-w-6xl flex-col gap-20 pb-8">
      <Hero />
      <Toolkit />
      <SelectedProjects />
      <Writing />
    </div>
  );
};

export default Home;
