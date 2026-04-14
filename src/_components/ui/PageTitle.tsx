import { Heading, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  subtitle?: string;
}

const PageTitle: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col self-start">
      <Heading>{title}</Heading>
      <Text className="self-start text-md opacity-80">{subtitle}</Text>
    </div>
  );
};
export default PageTitle;
