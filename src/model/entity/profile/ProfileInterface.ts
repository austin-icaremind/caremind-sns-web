export interface ProfileInterface {
  getProfileTitleData: (id: number) => Promise<ProfileTitleInterface>;
  getProjectsData: (id: number) => Promise<ProfileProjectsInterface>;
  getProfileExperience: (id: number) => Promise<ProfileExperienceInterface>;
  getProfileEducation: (id: number) => Promise<ProfileEducationInterface>;
}

export interface ProfileTitleInterface {
  id: number;
  profileImage: string;
  profileBackImage: string;
  name: string;
  location: string;
  address: string;
  jobDescription: string;
  about: string;
}

export interface ProfileProjectsInterface {
  id: number;
  coverImage: {
    id: number;
    image: string;
  };
  title: string;
  description: string;
  startDate: string;
  endDate: string | null;
}

export interface ProfileExperienceInterface {
  imgSrc: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  id: number;
  experienceCompany: {
    id: number;
    name: string;
    logo: string;
    location: string;
  };
}

export interface ProfileEducationInterface {
  id: number;
  course: string;
  description: string;
  startDate: string;
  endDate: string | null;
  educationInstitute: {
    id: number;
    name: string;
    logo: string;
  };
}
