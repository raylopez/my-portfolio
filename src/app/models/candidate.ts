export interface Canditate {
  name: string;
  lastName: string;
  position: string;
  about: string;
  phone: string;
  email: string;
  resumeUrl: string;
  socialStatus: string;
  experenceJobs: Array<Experience>,
  education: Array<Experience>,
  skills: string[],
  softSkills: string[],
  socials: SocialItem[]
}

export interface Experience {
  name: string;
  periodStart: Date;
  periodEnd: Date;
  degree: string; //Puesto o titulo universitario
  description: string;
  technologies?: string[];
  link?: string;
}

export interface SocialItem {
  url: string;
  name: string;
}
