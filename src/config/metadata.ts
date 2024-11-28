import { FaGithub, FaLinkedin } from "react-icons/fa";
import oeLogo from "../assets/oe.png";
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
    img: "https://images.credly.com/size/340x340/images/26fe3423-8ead-4ab5-a19e-7d16f242a3ac/IBM-Mentor-template.png",
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
