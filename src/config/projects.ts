import blogs from "../config/blogs.json";
import {
  SiGithubactions,
  SiTypescript,
  SiVite,
  SiReact,
  SiPython,
  SiTensorflow,
  SiNvidia,
} from "react-icons/si";
import { FaAws, FaPython } from "react-icons/fa";
import { Technology } from "../interfaces/About";

export type BlogReference = (typeof blogs)[number]["id"];

export interface Project {
  title: string;
  url: string;
  subtitle?: string;
  highlights?: string[];
  technologies: Technology[];
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
    subtitle: "Own portfolio web application showcasing my blogs and work.",
    highlights: [
      "Static website hosted on AWS S3",
      "Chat agent created with AWS flows and Lambda",
    ],
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

    subtitle:
      "Combining image processing techniques with CNN to detect lanes and traffic signs.",
    blogs: [2],
    highlights: [
      "Lane detection using traditional image processing techniques",
      "Traffic sign detection and recognition using YoloV3 model and custom CNN",
    ],
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

    subtitle:
      "Training CNN's to detect and recognize traffic signs on GTSRB and GTSDB datasets. Complete pipeline for dataset preprocessing before training.",
    blogs: [2],
    highlights: [
      "Traffic sign detection and recognition using YoloV3 model and custom CNN",
      "Traning custom CNN's on GTSRB and GTSDB using tensorflow gpu and jupyter notebook",
      "Evaluating different CNN's and choosing best model",
    ],
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

    subtitle: "Detect vehicles on images using YoloV3 and coco dataset",
    blogs: [1],
    highlights: ["Detecting vehicles using YoloV3 trained on the coco dataset"],
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

    subtitle: "Detect vehicles on images using YoloV3 and coco dataset",
    highlights: ["Python script hosted on AWS lambda"],
  },
  {
    title: "Pycuda Grayscale",
    url: "https://github.com/mrobert3456/pycuda_grayscale",
    technologies: [
      {
        name: "Python",
        icon: FaPython,
      },
      {
        name: "Cuda",
        icon: SiNvidia,
      },
    ],

    subtitle: "Grayscaling images using Cuda and Python",
    blogs: [0],
    highlights: ["Grayscaling image using CUDA and Python"],
  },
];
