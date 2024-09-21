import { SimpleGrid, Flex } from "@chakra-ui/react";
import CustomCardContainer from "../_components/ui/CustomCardContainer";
import ContactForm from "../_components/ContactForm";

const Contact: React.FC = () => {
  return (
    <SimpleGrid id="Contact" className="h-full">
      <Flex className="justify-center items-center">
        <CustomCardContainer className="!min-w-[20rem] !max-w-[30rem]">
          <ContactForm />
        </CustomCardContainer>
      </Flex>
    </SimpleGrid>
  );
};

export default Contact;
