import { ProfileTitleInterface } from "./ProfileTitleInterface";
import { Profile } from "./Profile";

export class ProfileTitle extends Profile implements ProfileTitleInterface {
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
