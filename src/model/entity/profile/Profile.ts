import { ProfileInterface } from "./ProfileInterface";
import { Data } from "./Data";
export class Profile implements ProfileInterface {
  id: number;
  profileImage?: string;
  name?: string;
  location?: string;
  jobDescription?: string;
  connections?: number;
  message?: string;
  category?: string;
  data?: Data[];

  constructor(
    id: number,
    profileImage?: string,
    name?: string,
    location?: string,
    jobDescription?: string,
    connections?: number,
    message?: string,
    category?: string,
    data?: Data[]
  ) {
    this.id = id;
    this.profileImage = profileImage;
    this.name = name;
    this.location = location;
    this.jobDescription = jobDescription;
    this.connections = connections;
    this.message = message;
    this.category = category;
    this.data = data; // Education 데이터를 배열에 할당
  }
}
