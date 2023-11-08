import {
  ProfileEducationInterface,
  ProfileTitleInterface,
  ProfileExperienceInterface,
} from "@/model/entity/profile/ProfileInterface";

export interface ProfileServiceInterface {
  // getTitle: () => Promise<ProfileTitle>;
  // getExperience: () => Promise<ProfileExperience>;
  // getEducation: () => Promise<Profile>;
<<<<<<< HEAD
  getTitle: () => Promise<ProfileTitleData>;
  getExperience: () => Promise<ExperienceData>;
  getEducation: () => Promise<EducationData>;
=======
  getTitle: () => Promise<ProfileTitleInterface>;
  getExperience: () => Promise<ProfileExperienceInterface>;
  getEducation: () => Promise<ProfileEducationInterface>;
>>>>>>> f0825b89dfe75f8c1854d0a0479aa456bbcd2dd6
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
