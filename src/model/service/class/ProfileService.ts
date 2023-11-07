import axios, { AxiosResponse } from "axios";
import {
  ProfileServiceInterface,
  EducationData,
} from "../interface/ProfileServiceInterface";
import { Profile } from "@/model/entity/profile/Profile";
import { ProfileTitle } from "@/model/entity/profile/ProfileTitle";
import { ProfileExperience } from "@/model/entity/profile/ProfileExperience";

export class ProfileService implements ProfileServiceInterface {
  private apiUrl: string;

  constructor() {
    this.apiUrl = "/data"; // 새로운 URL로 변경
  }

  async getTitle(): Promise<ProfileTitle> {
    const response: AxiosResponse<ProfileTitle> = await axios.get(
      `${this.apiUrl}/ProfileTitle.json`
    );
    const result = new ProfileTitle(
      response.data.id,
      response.data.profileImage,
      response.data.name,
      response.data.location,
      response.data.jobDescription,
      response.data.connections
    );
    return result;
  }

  async getExperience(): Promise<ProfileExperience> {
    const response: AxiosResponse<ProfileExperience> = await axios.get(
      `${this.apiUrl}/Experience.json`
    );

    const result = new Profile(
      response.data.id,
      response.data.message,
      response.data.category,
      response.data.data
    );

    return result;
  }

  async getEducation(): Promise<Profile> {
    const response: AxiosResponse<EducationData> = await axios.get(
      `${this.apiUrl}/Education.json`
    );

    const result = new Profile(
      response.data.id,
      response.data.message,
      response.data.category,
      response.data.data
    );

    return result;
  }
}
