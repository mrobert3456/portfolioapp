interface Metadata {
  name: string;
  location: string;
  company: string;
  role: string;
}

interface Website {
  title: string;
  url: string;
  icon: IconType;
}

interface Certificate {
  title: string;
  url: string;
  img: string;
  alt: string;
  institution?: string;
  grade?: number;
}
