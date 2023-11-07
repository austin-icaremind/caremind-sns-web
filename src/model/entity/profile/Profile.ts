import { ProfileInterface } from "./ProfileInterface";

export class Profile implements ProfileInterface {
  id: number;
  message?: string;
  category?: string;
  data?: Data[];
  profileImage?: string;
  name?: string;
  location?: string;
  jobDescription?: string;
  connections?: number;

  constructor(
    profileImage: string,
    name: string,
    location: string,
    jobDescription: string,
    connections: number,
    id: number,
    message: string,
    category: string,
    data: Data[]
  ) {
    this.profileImage = profileImage;
    this.name = name;
    this.location = location;
    this.jobDescription = jobDescription;
    this.connections = connections;
    this.id = id;
    this.message = message;
    this.category = category;
    this.data = data; // Education 데이터를 배열에 할당
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
