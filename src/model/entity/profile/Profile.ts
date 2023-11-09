import * as ProfileInterface from "./ProfileInterface";

export class Profile implements ProfileInterface.ProfileInterface {
  id: number;

  constructor(id: number) {
    this.id = id;
  }
}

export class ProfileEducationImp
  extends Profile
  implements ProfileInterface.ProfileEducationInterface
{
  message: string;
  category: string;
  data: ProfileInterface.Data[];
  constructor(
    id: number,
    message: string,
    category: string,
    data: ProfileInterface.Data[]
  ) {
    super(id);
    this.message = message;
    this.category = category;
    this.data = data;
  }
}

export class ProfileExperienceImp
  extends Profile
  implements ProfileInterface.ProfileExperienceInterface
{
  message: string;
  category: string;
  data: ProfileInterface.Data[];
  constructor(
    id: number,
    message: string,
    category: string,
    data: ProfileInterface.Data[]
  ) {
    super(id);
    this.message = message;
    this.category = category;
    this.data = data;
  }
}

export class ProfileTitleImp
  extends Profile
  implements ProfileInterface.ProfileTitleInterface
{
  profileImage: string;
  profileBackImage: string;
  name: string;
  location: string;
  jobDescription: string;
  connections: number;
  about: string;

  constructor(
    id: number,
    profileImage: string,
    profileBackImage: string,
    name: string,
    location: string,
    jobDescription: string,
    connections: number,
    about: string
  ) {
    super(id);
    this.profileImage = profileImage;
    this.profileBackImage = profileBackImage;
    this.name = name;
    this.location = location;
    this.jobDescription = jobDescription;
    this.connections = connections;
    this.about = about;
  }
}
