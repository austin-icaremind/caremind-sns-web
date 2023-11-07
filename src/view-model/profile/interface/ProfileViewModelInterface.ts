import { ProfileEducation } from "@/model/entity/profile/ProfileEducation";
import { ProfileExperience } from "@/model/entity/profile/ProfileExperience";

export interface ProfileViewModelInterface {
  getProfileTitleData: () => Promise<ProfileTitleData>;
  getProfileExperience: () => Promise<ProfileEducation>;
  getProfileEducation: () => Promise<ProfileExperience>;
}

export interface ProfileTitleData {
  profileImage: string;
  name: string;
  location: string;
  jobDescription: string;
  connections: number;
}

export interface ExperienceInsideData {
  imgSrc: string;
  title: string;
  titleSub: string;
  periodStart: number;
  periodEnd: number;
  detail: string;
  id: number;
  workSpace: string;
}

export interface EducationInsideData {
  imgSrc: string;
  title: string;
  titleSub: string;
  periodStart: number;
  periodEnd: number;
  detail: string;
  id: number;
  workSpace: string;
}

export interface ExperienceData {
  id: number;
  message: string;
  category: string;
  data: ExperienceInsideData[];
}

export interface EducationData {
  id: number;
  message: string;
  category: string;
  data: EducationInsideData[];
}
