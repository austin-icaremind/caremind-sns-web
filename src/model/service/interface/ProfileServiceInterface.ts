import {
  ProfileEducationInterface,
  ProfileTitleInterface,
  ProfileExperienceInterface,
} from "@/model/entity/profile/ProfileInterface";

export interface ProfileServiceInterface {
  getTitle: () => Promise<ProfileTitleInterface>;
  getExperience: () => Promise<ProfileExperienceInterface>;
  getEducation: () => Promise<ProfileEducationInterface>;
}

export interface ProfileTitleData {
  id: number;
  profileImage: string;
  profileBackImage: string;
  name: string;
  location: string;
  jobDescription: string;
  connections: number;
  about: string;
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
