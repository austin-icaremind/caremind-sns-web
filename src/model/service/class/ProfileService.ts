import axios, { AxiosResponse } from "axios";
import * as ProfileServiceInterface from "../interface/ProfileServiceInterface";
import * as Profile from "@/model/entity/profile/Profile";
import * as ProfileInterface from "@/model/entity/profile/ProfileInterface";
import BASE_API from "@/model/config";

export class ProfileService {
  static async getTitle(
    id: number
  ): Promise<ProfileInterface.ProfileTitleInterface> {
    const response: AxiosResponse<ProfileServiceInterface.ProfileTitleInterface> =
      await axios.get(`${BASE_API}/profile/${id}`);
    // await axios.get(`${BASE_API}/profile/ProfileTitle${id}.json`);
    const result = new Profile.ProfileTitleImp(
      response.data.id,
      response.data.profileBackImage,
      response.data.location,
      response.data.address,
      response.data.jobDescription,
      response.data.about,
      response.data.user
    );
    return result;
  }

  static async getProjects(
    id: number
  ): Promise<ProfileInterface.ProfileProjectsInterface[]> {
    const response: AxiosResponse<
      ProfileServiceInterface.ProfileProjectsInterface[]
    > = await axios.get(`${BASE_API}/profile/${id}/project`);
    // await axios.get(`${BASE_API}/profile/Projects${id}.json`);

    const result = response.data.map(
      (project) =>
        new Profile.ProfileProjectsImp(
          project.id,
          project.coverImage,
          project.title,
          project.description,
          project.startDate,
          project.endDate
        )
    );

    console.log("테스트", result);
    return result;
  }

  static async getExperience(
    id: number
  ): Promise<ProfileInterface.ProfileExperienceInterface[]> {
    const response: AxiosResponse<
      ProfileServiceInterface.ProfileExperienceInterface[]
    > = await axios.get(`${BASE_API}/profile/${id}/experience`);
    // await axios.get(`${BASE_API}/profile/Experience${id}.json`);

    const result = response.data.map(
      (experience) =>
        new Profile.ProfileExperienceImp(
          experience.imgSrc,
          experience.position,
          experience.startDate,
          experience.endDate,
          experience.description,
          experience.id,
          experience.experienceCompany
        )
    );

    return result;
  }

  static async getEducation(
    id: number
  ): Promise<ProfileInterface.ProfileEducationInterface[]> {
    const response: AxiosResponse<
      ProfileServiceInterface.ProfileEducationInterface[]
    > = await axios.get(`${BASE_API}/profile/${id}/education`);
    // await axios.get(`${BASE_API}/profile/Education${id}.json`);

    const result = response.data.map(
      (education) =>
        new Profile.ProfileEducationImp(
          education.id,
          education.course,
          education.description,
          education.startDate,
          education.endDate,
          education.educationInstitute
        )
    );

    return result;
  }
}
