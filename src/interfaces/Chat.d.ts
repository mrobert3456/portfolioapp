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
  disclaimer: string;
}

interface LambdaError {
  errorMessage: string;
  errorType: string;
  requestId: string;
  stackTrace: string[];
}

interface ChatTool {
  sendMessage: (message: Message) => Promise<void>;
  messages: Message[];
  error: string | null | undefined;
  isLoading: booelan;
}

interface ChatParams {
  message: string;
  history: string[];
}
interface Message {
  type: ActionType;
  content: string | ContactInformation;
}
type ActionType = "email" | "question";
