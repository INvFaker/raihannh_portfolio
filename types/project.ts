// types/project.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  link: string;
  imageUrl: string;
  image?: string;
}
