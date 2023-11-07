import { ProfileInterface } from "./ProfileInterface";
import { Profile } from "./Profile";

export class ProfileTitle extends Profile implements ProfileInterface {
  profileImage: string;
  name: string;
  location: string;
  jobDescription: string;
  connections: number;

  constructor(
    id: number,
    profileImage: string,
    name: string,
    location: string,
    jobDescription: string,
    connections: number
  ) {
    super(id);
    this.profileImage = profileImage;
    this.name = name;
    this.location = location;
    this.jobDescription = jobDescription;
    this.connections = connections;
  }
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
