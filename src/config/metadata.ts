import { FaGithub, FaLinkedin, FaPython, FaReact } from "react-icons/fa";
import { RiAnthropicFill, RiNextjsLine } from "react-icons/ri";
import oeLogo from "../assets/oe.png";
import { ChatMetadata } from "../interfaces/Chat";
import { IoDocumentOutline } from "react-icons/io5";
import {
  SiCredly,
  SiGithubactions,
  SiLangchain,
  SiRuby,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
import {
  Certificate,
  Metadata,
  Technology,
  Website,
} from "../interfaces/About";
import { FaAws } from "react-icons/fa6";
import { PiRobot } from "react-icons/pi";
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
  {
    title: "Credly",
    url: "https://www.credly.com/users/robert-meszaros.4ab3a2e4/badges#credly",
    icon: SiCredly,
  },
];

export const CERTS: Certificate[] = [
  {
    title: "IBM developer experienced",
    img: "https://images.credly.com/images/415eaba6-0731-464e-a1eb-ed35eff8c3e7/Developer-Experienced1.png",
    url: "https://www.credly.com/badges/e9a3cb7d-f895-4757-8f9b-a8d8dedabb7e/linked_in_profile",
    alt: "IBM developer experienced certificate",
  },
  {
    title: "Data Science Profession - Experienced",
    img: "https://images.credly.com/size/680x680/images/4f37fc04-3ade-4dce-90db-4d689cf0322a/Data-Scientist-Experienced.png",
    url: "https://www.credly.com/badges/01116a50-a4b2-441d-b8fa-fa68c867d094",
    alt: "Data Science Profession - Experienced certificate",
  },
  {
    title: "IBM mentor",
    img: "https://images.credly.com/size/340x340/images/9465fcb9-15a0-4139-a216-b049d358b6c3/IBM-Mentor-template.png",
    url: "https://www.credly.com/badges/e6535ebf-7679-442f-923b-06de17cad18f/linked_in?t=siw1lz",
    alt: "IBM mentor certificate",
  },
  {
    title: "IBM Recognized Speaker/Presenter",
    img: "https://images.credly.com/size/340x340/images/3154e547-0202-4491-9c05-4a7ffa05dd1c/Recognized-Speaker-Presenter.png",
    url: "https://www.credly.com/badges/cf39c736-e904-4be9-850f-3c0775267934",
    alt: "IBM Recognized Speaker/Presenter certificate",
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
    name: "anthropic.claude-opus-4-6-v1",
    icon: RiAnthropicFill,
  },
  version: "1.0",
};

export const SKILLS: Technology[] = [
  {
    name: "Typescript",
    icon: SiTypescript,
  },
  {
    name: "Python",
    icon: FaPython,
  },
  {
    name: "React.Js",
    icon: FaReact,
  },
  {
    name: "Next.Js",
    icon: RiNextjsLine,
  },
  {
    name: "Ruby",
    icon: SiRuby,
  },
  {
    name: "Langchain",
    icon: SiLangchain,
  },
  {
    name: "Langchain",
    icon: SiLangchain,
  },
  {
    name: "Tensorflow",
    icon: SiTensorflow,
  },
  {
    name: "AWS",
    icon: FaAws,
  },
  {
    name: "WatsonX Orchestrate",
    icon: PiRobot,
  },
  {
    name: "Github Actions",
    icon: SiGithubactions,
  },
];
export const STARTER_MESSAGE =
  "Hi, I'm an assistant for Robert's portfolio.\nAsk me anything about his career, blogs, projects or anything you would like to know!\nI can also help you write him an email.";

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
