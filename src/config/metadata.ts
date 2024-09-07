import { FaGithub, FaLinkedin } from "react-icons/fa";
export const INTRO: Metadata = {
  name: "Robert Meszaros",
  location: "Budapest, Hungary",
  company: "IBM",
  role: "Fullstack developer",
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
    title: "IBM mentor",
    img: "https://images.credly.com/size/340x340/images/26fe3423-8ead-4ab5-a19e-7d16f242a3ac/IBM-Mentor-template.png",
    url: "https://www.credly.com/badges/e6535ebf-7679-442f-923b-06de17cad18f/linked_in?t=siw1lz",
    alt: "IBM mentor certificate",
  },
];

export const EDUCATIONS: Certificate[] = [
  {
    title: "Computer Science Engineer Bsc",
    img: "https://media.licdn.com/dms/image/v2/C560BAQEvdKc_1EfjjA/company-logo_100_100/company-logo_100_100/0/1630670359917?e=1733356800&v=beta&t=wmpeBMAEQe9ZZPENunKvACYTaTR7KiLVODOrm2dF3Xs",
    url: "https://nik.uni-obuda.hu/en/computer-science-engineering-bsc/",
    alt: "Computer Science Engineer Bsc",
    institution: "Obuda University",
    grade: 5,
  },
];