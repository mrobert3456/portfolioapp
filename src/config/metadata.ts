import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiAnthropicFill } from "react-icons/ri";
import oeLogo from "../assets/oe.png";
import { ChatMetadata } from "../interfaces/Chat";
import { IoDocumentOutline } from "react-icons/io5";

export const INTRO: Metadata = {
  name: "Robert Meszaros",
  location: "Budapest, Hungary",
  company: "IBM",
  role: "Full stack developer",
};

export const BIO =
  "I am a computer science engineer with a focus on web application development and a deep interest in image processing.\
 I explore innovative techniques and convolutional neural networks (CNNs) to create advanced solutions for image analysis and processing tasks.";

export const WEBSITES: Website[] = [
  {
    title: "Github",
    url: "https://github.com/mrobert3456/",
    icon: FaGithub,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/róbert-mészáros-345143233/",
    icon: FaLinkedin,
  },
];

export const CERTS: Certificate[] = [
  {
    title: "IBM developer foundation",
    img: "https://images.credly.com/size/340x340/images/f870e8bb-0b8b-44f5-b926-791d6081e659/Developer-Foundation1.png",
    url: "https://www.credly.com/badges/6499bae5-f083-4e72-97b6-9799a8273f47/linked_in_profile",
    alt: "IBM developer foundation certificate",
  },

  {
    title: "IBM developer experienced",
    img: "https://images.credly.com/images/415eaba6-0731-464e-a1eb-ed35eff8c3e7/Developer-Experienced1.png",
    url: "https://www.credly.com/badges/e9a3cb7d-f895-4757-8f9b-a8d8dedabb7e/linked_in_profile",
    alt: "IBM developer experienced certificate",
  },

  {
    title: "IBM mentor",
    img: "https://images.credly.com/size/340x340/images/9465fcb9-15a0-4139-a216-b049d358b6c3/IBM-Mentor-template.png",
    url: "https://www.credly.com/badges/e6535ebf-7679-442f-923b-06de17cad18f/linked_in?t=siw1lz",
    alt: "IBM mentor certificate",
  },
];

export const EDUCATIONS: Certificate[] = [
  {
    title: "Computer Science Engineer Bsc",
    img: oeLogo,
    url: "https://nik.uni-obuda.hu/en/computer-science-engineering-bsc/",
    alt: "Computer Science Engineer Bsc",
    institution: "Obuda University",
  },
];

export const AGENT: ChatMetadata = {
  documents: {
    name: "Robert Meszaros CV",
    url: "https://drive.google.com/file/d/1s3DrOU_IaYofNm1qZMMk0pdqMucvj9jK/view?usp=sharing",
    icon: IoDocumentOutline,
  },
  model: {
    name: "claude-3-5-sonnet-20240620-v1:0",
    icon: RiAnthropicFill,
  },
  version: "1.0",
};

export const CHAT_AGENT_DISCLAIMER =
  "This chat assistant is an interactive feature of my personal portfolio website. " +
  "It can only answer questions based on the information in my CV.\n\n" +
  "- The assistant **does not store any data in cookies or other persistent storage on your device**.\n" +
  "- Your messages and the conversation history **are logged on the server side** so the assistant can:\n" +
  "  - maintain context during the conversation, and\n" +
  "  - support monitoring, debugging, and improving the service.\n" +
  "- These logs may include:\n" +
  "  - the content of your messages, and\n" +
  "  - technical information (such as timestamps and request metadata).\n" +
  "- Logs are **kept for up to 1 week**.\n" +
  "- Logs are **not used for model training**.\n" +
  "- Logs are **not used to create marketing profiles** and are **not sold to third parties**.\n\n" +
  "This disclaimer applies solely to the behavior of the chat assistant. Other parts of the website, your browser, or third-party services (such as hosting providers or analytics tools, if used) may have their own data and cookie practices, which are governed by their respective policies.";
