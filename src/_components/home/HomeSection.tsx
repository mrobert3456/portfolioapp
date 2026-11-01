import { useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

interface HomeSectionProps {
  id: string;
  title: string;
  linkLabel?: string;
  linkTo?: string;
  children?: React.ReactNode;
}

const HomeSection: React.FC<HomeSectionProps> = ({
  id,
  title,
  linkLabel,
  linkTo,
  children,
}) => {
  const lineColor = useColorModeValue("border-black/10", "border-white/10");

  return (
    <section id={id} className="flex flex-col gap-6">
      <div
        className={`flex items-end justify-between gap-4 border-b pb-3 ${lineColor}`}
      >
        <h2 className="font-serif text-2xl md:text-3xl">{title}</h2>
        {linkTo && (
          <Link
            to={linkTo}
            className="flex items-center gap-1 whitespace-nowrap text-xs opacity-70 transition-colors hover:text-blue-500 hover:opacity-100"
          >
            {linkLabel}
            <GoArrowRight />
          </Link>
        )}
      </div>
      {children}
    </section>
  );
};

export default HomeSection;
