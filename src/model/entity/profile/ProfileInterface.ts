export interface ProfileInterface {
  getProfileTitleData: (id: number) => Promise<ProfileTitleInterface>;
  getProjectsData: (id: number) => Promise<ProfileProjectsInterface>;
  getProfileExperience: (id: number) => Promise<ProfileExperienceInterface>;
  getProfileEducation: (id: number) => Promise<ProfileEducationInterface>;
}

export interface ProfileMainInterface {
  id: number;
}

export interface ProfileTitleInterface extends ProfileMainInterface {
  profileImage: string;
  profileBackImage: string;
  name: string;
  location: string;
  jobDescription: string;
  connections: number;
  about: string;
}

export interface ProfileProjectsInterface extends ProfileMainInterface {
  data: ProjectsData[];
}

export interface ProfileExperienceInterface extends ProfileMainInterface {
  message: string;
  category: string;
  data: Data[];
}

export interface ProfileEducationInterface extends ProfileMainInterface {
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
