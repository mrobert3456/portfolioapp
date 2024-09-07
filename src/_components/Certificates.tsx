import { CERTS } from "../config/metadata";
import Papers from "./ui/Papers";

const Certificates: React.FC = () => {
  return <Papers id="Certifications" title="Certificates" papers={CERTS} />;
};

export default Certificates;
