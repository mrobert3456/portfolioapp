import { IconType } from "react-icons";
import blogs from "../config/blogs.json";
import {
  SiGithubactions,
  SiTypescript,
  SiVite,
  SiReact,
  SiPython,
  SiTensorflow,
} from "react-icons/si";
import { FaAws, FaPython } from "react-icons/fa";

export type BlogReference = (typeof blogs)[number]["id"];

export interface Project {
  title: string;
  url: string;
  description?: string;
  technologies: { name: string; icon: IconType }[];
  blogs?: BlogReference[];
}
export const PROJECTS: Project[] = [
  {
    title: "Forestlake",
    url: "https://github.com/mrobert3456/portfolioapp",
    technologies: [
      {
        name: "Typescript",
        icon: SiTypescript,
      },
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "Vite",
        icon: SiVite,
      },
      {
        name: "Github Actions",
        icon: SiGithubactions,
      },
      {
        name: "AWS",
        icon: FaAws,
      },
    ],
    description: "Own portfolio web application showcasing my blogs and work.",
  },
  {
    title: "Lane detection and Traffic sign recognition",
    url: "https://github.com/mrobert3456/Lane_detection",
    technologies: [
      {
        name: "Python",
        icon: SiPython,
      },
      {
        name: "Tensorflow",
        icon: SiTensorflow,
      },
    ],

    description:
      "Combining image processing techniques with CNN to detect lanes and traffic signs.",
    blogs: [2],
  },

  {
    title: "Traffic sign recognition",
    url: "https://github.com/mrobert3456/Traffic_sign_recognition",
    technologies: [
      {
        name: "Python",
        icon: SiPython,
      },
      {
        name: "Tensorflow",
        icon: SiTensorflow,
      },
    ],

    description:
      "Training CNN's to detect and recognize traffic signs on GTSRB and GTSDB datasets. Complete pipeline for dataset preprocessing before training.",
    blogs: [2],
  },

  {
    title: "Vehicle detection",
    url: "https://github.com/mrobert3456/vehicle_detection",
    technologies: [
      {
        name: "Python",
        icon: SiPython,
      },
    ],

    description: "Detect vehicles on images using YoloV3 and coco dataset",
    blogs: [1],
  },
  {
    title: "Mailer Lambda function",
    url: "https://github.com/mrobert3456/mailer_lambda",
    technologies: [
      {
        name: "Python",
        icon: FaPython,
      },
      {
        name: "Github Actions",
        icon: SiGithubactions,
      },
      {
        name: "AWS",
        icon: FaAws,
      },
    ],

    description: "Detect vehicles on images using YoloV3 and coco dataset",
  },
];
