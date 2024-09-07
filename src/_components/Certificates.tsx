import { CERTS } from "../config/metadata";
import Papers from "./ui/Papers";

const Certificates: React.FC = () => {
  return <Papers title="Certificates" papers={CERTS} />;
};

export default Certificates;
