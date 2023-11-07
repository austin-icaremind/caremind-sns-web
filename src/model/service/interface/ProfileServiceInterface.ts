import { Profile } from "@/model/entity/profile/Profile";
import { ProfileEducationInterface } from "@/model/entity/profile/ProfileEducationInterface";
import { ProfileExperience } from "@/model/entity/profile/ProfileExperience";
import { ProfileExperienceInterface } from "@/model/entity/profile/ProfileExperienceInterface";
import { ProfileTitle } from "@/model/entity/profile/ProfileTitle";
import { ProfileTitleInterface } from "@/model/entity/profile/ProfileTitleInterface";

export interface ProfileServiceInterface {
  // getTitle: () => Promise<ProfileTitle>;
  // getExperience: () => Promise<ProfileExperience>;
  // getEducation: () => Promise<Profile>;
  getTitle: () => Promise<ProfileTitleData>;
  getExperience: () => Promise<ExperienceData>;
  getEducation: () => Promise<EducationData>;
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
