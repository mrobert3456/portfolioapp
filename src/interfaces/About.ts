import { IconType } from "react-icons";

export interface Metadata {
  name: string;
  location: string;
  company: string;
  role: string;
}

export interface Website {
  title: string;
  url: string;
  icon: IconType;
}

export interface Certificate {
  title: string;
  url: string;
  img: string;
  alt: string;
  institution?: string;
  grade?: number;
}

export interface Technology {
  name: string;
  icon: IconType;
}
