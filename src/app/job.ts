export interface Job {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: RequirementsOrRole;
  role: RequirementsOrRole;
}

export interface RequirementsOrRole {
  content: string;
  items?: string[] | null;
}
