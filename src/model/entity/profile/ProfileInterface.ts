export interface ProfileInterface {
  id: number;
}

export interface ProfileTitleInterface extends ProfileInterface {
  profileImage: string;
  profileBackImage: string;
  name: string;
  location: string;
  jobDescription: string;
  connections: number;
  about: string;
}

export interface ProfileProjectsInterface extends ProfileInterface {
  data: ProjectsData[];
}

export interface ProfileExperienceInterface extends ProfileInterface {
  message: string;
  category: string;
  data: Data[];
}

export interface ProfileEducationInterface extends ProfileInterface {
  message: string;
  category: string;
  data: Data[];
}

export interface ProjectsData {
  id: number;
  image: string;
  title: string;
  category: string;
  date: string;
}

export interface Data {
  imgSrc: string;
  title: string;
  titleSub: string;
  periodStart: number;
  periodEnd: number;
  detail: string;
  id: number;
  workSpace: string;
}
