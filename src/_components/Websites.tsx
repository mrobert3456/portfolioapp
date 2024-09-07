import { Flex, Link } from "@chakra-ui/react";
import { WEBSITES } from "../config/metadata";
import { hoverImgScaling } from "./ui/CommonStyles";

const Websites: React.FC = () => {
  return (
    <Flex className="gap-2">
      {WEBSITES.map((item: Website) => {
        const Icon = item.icon;
        return (
          <Link aria-label={item.title} href={item.url} target="_blank">
            <Icon size={24} className={hoverImgScaling} />
          </Link>
        );
      })}
    </Flex>
  );
};

export default Websites;
