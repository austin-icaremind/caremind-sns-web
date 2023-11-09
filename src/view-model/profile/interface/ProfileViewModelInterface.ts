import * as ProfileInterface from "@/model/entity/profile/ProfileInterface";

export interface ProfileViewModelInterface {
  getProfileTitleData: () => Promise<ProfileInterface.ProfileTitleInterface>;
  getProfileExperience: () => Promise<ProfileInterface.ProfileEducationInterface>;
  getProfileEducation: () => Promise<ProfileInterface.ProfileExperienceInterface>;
}

export interface ProfileTitleData {
  id: number;
  profileImage: string;
  profileBackImage: string;
  name: string;
  location: string;
  jobDescription: string;
  connections: number;
}

export interface ProfileProjectsData {
  id: number;
  data: ProfileProjectsInsideData[];
}

export interface ProfileProjectsInsideData {
  id: number;
  image: string;
  title: string;
  category: string;
  date: string;
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
