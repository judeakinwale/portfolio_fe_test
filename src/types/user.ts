export interface UserSkills {
  name: string;
  category: string;
  experience?: string;
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
}
