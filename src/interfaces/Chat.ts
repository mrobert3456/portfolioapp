import { IconType } from "react-icons";
export interface Content {
  name: string;
  icon: IconType;
  url?: string;
}
export interface ChatMetadata {
  documents: Content;
  model: Content;
  version: string;
}
export interface LambdaError {
  errorMessage: string;
  errorType: string;
  requestId: string;
  stackTrace: string[];
}
export interface ChatTool {
  sendMessage: (agentAnswer: AgentAnswer) => Promise<void>;
  agentAnswers: AgentAnswer[];
  error: string | null | undefined;
  isLoading: boolean;
}
export interface ChatParams {
  message: string;
  history: string[];
}
export interface AgentAnswer {
  type: ActionType;
  content: string | ContactInformation;
}
export interface ComponentTypeProps {
  agentAnswer: AgentAnswer;
}
export type ActionType = "email" | "question";
