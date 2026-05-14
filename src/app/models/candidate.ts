import { TimelineItemModel } from "../components/timeline/timeline.model";
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
export interface Candidate {
  name: string;
  lastName: string;
  position: string;
  about: string;
  phone: string;
  email: string;
  resumeUrl: string;
  profilePhotoPath: string;
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

//ViewModels
export interface SocialIconFontAwesome extends SocialItem {
  icon: IconDefinition
}

export type CandidateModel = Omit<Candidate, 'experenceJobs' | 'education' | 'socials'>
  & {
    experenceJobsTimeline: Array<TimelineItemModel>,
    educationTimeline: Array<TimelineItemModel>,
    socialIcons: Array<SocialIconFontAwesome>,
    skillIcons: Array<IconDefinition>,
  }
