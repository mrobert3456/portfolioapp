import { IconType } from "react-icons";

interface Content {
  name: string;
  icon: IconType;
  url?: string;
}
interface ChatMetadata {
  documents: Content;
  model: Content;
  version: string;
}
