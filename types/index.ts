export interface ProjectT {
  id: string;
  year: number;
  client: string;
  title: string;
  services: string[];
  solution: string;
  impact: string[];
  imageUrl: string;
}

export interface ExperienceT {
  id: string;
  company: string;
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  periode: string;
}

export interface ServiceT {
  focus: string[];
  label: string;
  solution: string;
  serviceImage: string;
}
