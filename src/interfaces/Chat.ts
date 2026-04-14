import { UseDisclosureReturn } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { ContactInformation } from "./Contact";
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
export interface ChatTool extends Partial<UseDisclosureReturn> {
  sendMessage: (agentAnswer: AgentAnswer) => Promise<void>;
  agentAnswers: AgentAnswer[];
  error: string | null | undefined;
  isLoading: boolean;
}
export interface ChatParams {
  message: string;
  history: string[];
}

export type AnswerContent = string | ContactInformation;

export interface AgentAnswer {
  type: ActionType;
  content: AnswerContent;
}
export interface ComponentTypeProps {
  message: AnswerContent;
  role: "user" | "assistant";
}
export type ActionType = "email" | "question";
