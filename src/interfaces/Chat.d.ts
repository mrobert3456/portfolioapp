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

export type LambdaResponse = LambdaError | string;
