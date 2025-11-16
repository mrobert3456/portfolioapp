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

interface LambdaError {
  errorMessage: string;
  errorType: string;
  requestId: string;
  stackTrace: string[];
}

interface ChatTool {
  sendMessage: (message: string) => Promise<void>;
  messages: string[];
  error: string | null | undefined;
  isLoading: booelan;
}
