import axios, { AxiosResponse } from "axios";
import * as ProfileInterface from "@/model/entity/profile/ProfileInterface";
import * as ProfileServiceInterface from "../interface/ProfileServiceInterface";
import * as Profile from "@/model/entity/profile/Profile";
import BASE_API from "@/model/config";

export class ProfileService
  implements ProfileServiceInterface.ProfileServiceInterface
{
  private apiUrl: string;

  constructor() {
    this.apiUrl = "BASE_API"; // 새로운 URL로 변경
  }

  async getTitle(): Promise<ProfileInterface.ProfileTitleInterface> {
    const response: AxiosResponse<ProfileServiceInterface.ProfileTitleData> =
      await axios.get(`${this.apiUrl}/ProfileTitle.json`);
    console.log("테스트", response);
    const result = new Profile.ProfileTitleImp(
      response.data.id,
      response.data.profileImage,
      response.data.name,
      response.data.location,
      response.data.jobDescription,
      response.data.connections
    );
    return result;
  }

  async getExperience(): Promise<ProfileInterface.ProfileExperienceInterface> {
    const response: AxiosResponse<ProfileServiceInterface.ExperienceData> =
      await axios.get(`${this.apiUrl}/Experience.json`);

    const result = new Profile.ProfileExperienceImp(
      response.data.id,
      response.data.message,
      response.data.category,
      response.data.data
    );

    return result;
  }

  async getEducation(): Promise<ProfileInterface.ProfileEducationInterface> {
    const response: AxiosResponse<ProfileServiceInterface.EducationData> =
      await axios.get(`${this.apiUrl}/Education.json`);

    const result = new Profile.ProfileEducationImp(
      response.data.id,
      response.data.message,
      response.data.category,
      response.data.data
    );

    return result;
  }
}
