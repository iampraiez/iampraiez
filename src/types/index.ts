export interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface NavLink {
  name: string;
  href: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  image: string;
}
