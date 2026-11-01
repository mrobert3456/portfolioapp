import CredentialItem from "./CredentialItem";
import HomeSection from "../home/HomeSection";
import { CERTS, EDUCATIONS } from "../../config/metadata";
import { Certificate } from "../../interfaces/About";

const Credentials: React.FC = () => {
  return (
    <div className="grid gap-20 lg:grid-cols-[2fr_1fr] lg:gap-12">
      <HomeSection id="Certifications" title="Certifications">
        <div className="grid sm:grid-cols-2">
          {CERTS.map((item: Certificate) => (
            <CredentialItem key={`cert__${item.url}`} credential={item} />
          ))}
        </div>
      </HomeSection>

      <HomeSection id="Education" title="Education">
        <div className="flex flex-col">
          {EDUCATIONS.map((item: Certificate) => (
            <CredentialItem key={`education__${item.url}`} credential={item} />
          ))}
        </div>
      </HomeSection>
    </div>
  );
};

export default Credentials;
