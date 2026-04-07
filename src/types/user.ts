export interface UserSkills {
  name: string;
  category: string;
  experience?: string;
}

export interface UserExperience {
  isCurrent: boolean;
  company: string;
  location: string;
  role: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export interface UserProject {
  title: string;
  description: string;
  role: string;
  technologies: string[];
  responsibilities: string[];
  company?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
}

export interface UserContact {
  Email?: string;
  GitHub?: string;
  LinkedIn?: string;
  Twitter?: string;
  Phone?: string;
  Whatsapp?: string;
}

export interface UserInfo {
  name: string;
  email: string;
  title: string;
  description?: string;
  detailedDescription?: string;
  yearsOfExperience: string;
  experienceDescription?: string;
  skills: UserSkills[];
  workExperience?: UserExperience[];
  projects?: UserProject[];
  contactInfo?: UserContact;
}
