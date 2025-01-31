import { SimpleGrid, Icon, Text, Link } from "@chakra-ui/react";

import { AGENT } from "../../config/metadata";
import { Content } from "../../interfaces/Chat";
import CustomDrawer from "../ui/CustomDrawer";

interface AgentDetails {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const AgentDetails: React.FC<AgentDetails> = ({ isOpen, setIsOpen }) => {
  return (
    <CustomDrawer
      title="Details"
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          {Object.entries(AGENT).map(
            ([key, value]: [string, string | Content]) => (
              <SimpleGrid
                key={`field__${key}`}
                columns={2}
                gridTemplateColumns={"0.6fr 1fr"}
              >
                <Text className="capitalize text-xs">{key}</Text>
                {typeof value !== "string" ? (
                  <div className="flex gap-2 items-center">
                    {<Icon as={value.icon} color={"blue.600"} />}
                    {value.url ? (
                      <Link
                        className="text-xs"
                        key={`${value.url}`}
                        aria-label={value.name}
                        href={value.url}
                        target="_blank"
                      >
                        {value.name}
                      </Link>
                    ) : (
                      <Text className="text-xs">{value.name}</Text>
                    )}
                  </div>
                ) : (
                  <Text className="capitalize text-xs">{value}</Text>
                )}
              </SimpleGrid>
            )
          )}
        </div>
        <div className="flex-col">
          <h3 className="text-sky-500">Features coming soon</h3>
          <ul>
            <li key="option-1" className="text-sm text-gray-500">
              Conversational memory
            </li>
            <li key="option-2" className="text-sm text-gray-500">
              Hallucination grading
            </li>
          </ul>
        </div>
      </div>
    </CustomDrawer>
  );
};
export default AgentDetails;
