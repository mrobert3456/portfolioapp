import { Link, Text, useColorModeValue } from "@chakra-ui/react";
import { GoLinkExternal } from "react-icons/go";
import { hoverSidelined } from "../ui/CommonStyles";

interface HomeListItemProps {
  index: number;
  title: string;
  subtitle?: string;
  details: string;
  url: string;
}

const HomeListItem: React.FC<HomeListItemProps> = ({
  index,
  title,
  subtitle,
  details,
  url,
}) => {
  const lineColor = useColorModeValue("border-black/10", "border-white/10");

  return (
    <Link
      href={url}
      target="_blank"
      className={`group relative flex items-start gap-6 border-b px-4 py-5 !no-underline ${lineColor} ${hoverSidelined}`}
    >
      <span className="w-5 shrink-0 pt-1 font-serif text-sm lining-nums opacity-50">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="flex flex-1 flex-col gap-1">
        <h3 className="text-lg transition-colors group-hover:text-blue-500">
          {title}
        </h3>
        <Text className="text-sm opacity-70">{subtitle}</Text>
        <Text className="mt-1 text-xs opacity-50">{details}</Text>
      </div>
      <GoLinkExternal
        size={14}
        className="mt-1.5 shrink-0 opacity-50 transition-opacity group-hover:opacity-100"
      />
    </Link>
  );
};

export default HomeListItem;
