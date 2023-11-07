import { Profile } from "@/model/entity/profile/Profile";
import { ProfileExperience } from "@/model/entity/profile/ProfileExperience";
import { ProfileTitle } from "@/model/entity/profile/ProfileTitle";

export interface ProfileServiceInterface {
  getTitle: () => Promise<ProfileTitle>;
  getExperience: () => Promise<ProfileExperience>;
  getEducation: () => Promise<Profile>;
}

export interface ProfileTitleData {
  id: number;
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
