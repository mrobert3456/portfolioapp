import { FlexProps } from "@chakra-ui/react";

const CustomCardContainer: React.FC<FlexProps> = ({ children, className }) => {
  return (
    <div
      className={`${className} flex flex-wrap gap-2 justify-center items-center relative p-5 `}
    >
      <div className="absolute top-0 right-0 w-[6rem] border-t-4 border-blue-500" />
      <div className="absolute top-0 right-0 h-[6rem]  border-r-4 border-blue-500" />
      <div className="absolute bottom-0 left-0 w-[6rem]  border-b-4 border-blue-500" />
      <div className="absolute bottom-0 left-0 h-[6rem]  border-l-4 border-blue-500" />
      {children}
    </div>
  );
};

export default CustomCardContainer;
