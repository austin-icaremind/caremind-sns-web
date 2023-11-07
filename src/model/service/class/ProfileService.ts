import axios, { AxiosResponse } from "axios";
import {
  ProfileServiceInterface,
  ProfileTitleData,
  EducationData,
  ExperienceData,
} from "../interface/ProfileServiceInterface";
import { ProfileTitle } from "@/model/entity/profile/ProfileTitle";
import { ProfileExperience } from "@/model/entity/profile/ProfileExperience";
import { ProfileEducation } from "@/model/entity/profile/ProfileEducation";
export class ProfileService implements ProfileServiceInterface {
  private apiUrl: string;

  constructor() {
    this.apiUrl = "/data"; // 새로운 URL로 변경
  }

  async getTitle(): Promise<ProfileTitle> {
    const response: AxiosResponse<ProfileTitleData> = await axios.get(
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
    const response: AxiosResponse<ExperienceData> = await axios.get(
      `${this.apiUrl}/Experience.json`
    );

    const result = new ProfileExperience(
      response.data.id,
      response.data.message,
      response.data.category,
      response.data.data
    );

    return result;
  }

  async getEducation(): Promise<ProfileEducation> {
    const response: AxiosResponse<EducationData> = await axios.get(
      `${this.apiUrl}/Education.json`
    );

    const result = new ProfileEducation(
      response.data.id,
      response.data.message,
      response.data.category,
      response.data.data
    );

    return result;
  }
}
