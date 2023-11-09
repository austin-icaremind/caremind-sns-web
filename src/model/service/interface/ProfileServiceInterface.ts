import {
  ProfileEducationInterface,
  ProfileTitleInterface,
  ProfileExperienceInterface,
} from "@/model/entity/profile/ProfileInterface";

export interface ProfileServiceInterface {
  getTitle: () => Promise<ProfileTitleData>;
  getProject: () => Promise<ProfileProjectsData>;
  getExperience: () => Promise<ExperienceData>;
  getEducation: () => Promise<EducationData>;
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

export interface ProfileProjectsInsideData {
  id: number;
  image: string;
  title: string;
  category: string;
  date: string;
}

export interface ProfileProjectsData {
  id: number;
  data: ExperienceInsideData[];
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
