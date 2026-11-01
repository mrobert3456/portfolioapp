import { Image, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { GoLinkExternal } from "react-icons/go";
import { hoverSidelined } from "../ui/CommonStyles";
import { Certificate } from "../../interfaces/About";

interface CredentialItemProps {
  credential: Certificate;
}

const CredentialItem: React.FC<CredentialItemProps> = ({ credential }) => {
  const lineColor = useColorModeValue("border-black/10", "border-white/10");

  return (
    <Link
      href={credential.url}
      target="_blank"
      className={`group relative flex items-center gap-4 border-b px-4 py-4 !no-underline ${lineColor} ${hoverSidelined}`}
    >
      <Image
        src={credential.img}
        alt={credential.alt}
        className="h-14 w-14 shrink-0 object-contain"
      />
      <div className="flex flex-1 flex-col gap-1">
        <h3 className="text-sm transition-colors group-hover:text-blue-500">
          {credential.title}
        </h3>
        {credential.institution && (
          <Text className="text-xs opacity-60">{credential.institution}</Text>
        )}
      </div>
      <GoLinkExternal
        size={14}
        className="shrink-0 opacity-50 transition-opacity group-hover:opacity-100"
      />
    </Link>
  );
};

export default CredentialItem;
