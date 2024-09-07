import { EDUCATIONS } from "../config/metadata";
import Papers from "./ui/Papers";

const Educations: React.FC = () => {
  return <Papers title="Educations" papers={EDUCATIONS} showDetails />;
};

export default Educations;
