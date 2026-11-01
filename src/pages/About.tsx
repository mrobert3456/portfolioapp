import AboutHero from "../_components/about/AboutHero";
import Credentials from "../_components/about/Credentials";
import Focus from "../_components/about/Focus";
import PageLayout from "../_components/layout/PageLayout";

const About: React.FC = () => {
  return (
    <PageLayout id="About" homeNavigation>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 pb-8">
        <AboutHero />
        <Focus />
        <Credentials />
      </div>
    </PageLayout>
  );
};

export default About;
