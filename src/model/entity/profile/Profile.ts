import * as ProfileInterface from "./ProfileInterface";

export class ProfileTitleImp implements ProfileInterface.ProfileTitleInterface {
  id: number;
  profileImage: string;
  profileBackImage: string;
  name: string;
  location: string;
  address: string;
  jobDescription: string;
  about: string;

  constructor(
    id: number,
    profileImage: string,
    profileBackImage: string,
    name: string,
    location: string,
    address: string,
    jobDescription: string,
    about: string
  ) {
    this.id = id;
    this.profileImage = profileImage;
    this.profileBackImage = profileBackImage;
    this.name = name;
    this.location = location;
    this.address = address;
    this.jobDescription = jobDescription;
    this.about = about;
  }
}

export class ProfileProjectsImp
  implements ProfileInterface.ProfileProjectsInterface
{
  id: number;
  coverImage: {
    id: number;
    image: string;
  };
  title: string;
  description: string;
  startDate: string;
  endDate: string | null;

  constructor(
    id: number,
    coverImage: {
      id: number;
      image: string;
    },
    title: string,
    description: string,
    startDate: string,
    endDate: string | null
  ) {
    this.id = id;
    this.coverImage = coverImage;
    this.title = title;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

export class ProfileExperienceImp
  implements ProfileInterface.ProfileExperienceInterface
{
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
  constructor(
    imgSrc: string,
    position: string,
    startDate: string,
    endDate: string,
    description: string,
    id: number,
    experienceCompany: {
      id: number;
      name: string;
      logo: string;
      location: string;
    }
  ) {
    this.imgSrc = imgSrc;
    this.position = position;
    this.startDate = startDate;
    this.endDate = endDate;
    this.description = description;
    this.id = id;
    this.experienceCompany = experienceCompany;
  }
}

export class ProfileEducationImp
  implements ProfileInterface.ProfileEducationInterface
{
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
  constructor(
    id: number,
    course: string,
    description: string,
    startDate: string,
    endDate: string | null,
    educationInstitute: {
      id: number;
      name: string;
      logo: string;
    }
  ) {
    this.id = id;
    this.course = course;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.educationInstitute = educationInstitute;
  }
}
