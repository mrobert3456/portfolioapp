import { Flex } from "@chakra-ui/react";
import CustomCardContainer from "../_components/ui/CustomCardContainer";
import ContactForm from "../_components/ContactForm";
import PageLayout from "../_components/layout/PageLayout";

const Contact: React.FC = () => {
  return (
    <PageLayout id="Contact">
      <Flex className="justify-center items-center">
        <CustomCardContainer className="!min-w-[20rem] !max-w-[30rem]">
          <ContactForm />
        </CustomCardContainer>
      </Flex>
    </PageLayout>
  );
};

export default Contact;
