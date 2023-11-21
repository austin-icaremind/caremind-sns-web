import * as ProfileViewModelInterface from "../interface/ProfileViewModelInterface";
import { ProfileService } from "@/model/service/class/ProfileService";

export class ProfileViewModel {
  static getProfileTitleData(
    id: number
  ): Promise<ProfileViewModelInterface.ProfileTitleInterface> {
    try {
      const response = ProfileService.getTitle(id);
      return response;
    } catch (error) {
      console.error("Error getting profile title data:", error);
      throw error;
    }
  }

  static getProjectsData(
    profileId: number,
    id: number
  ): Promise<ProfileViewModelInterface.ProfileProjectsInterface[]> {
    try {
      const response = ProfileService.getProjects(profileId, id);
      return response;
    } catch (error) {
      console.error("Error getting profile title data:", error);
      throw error;
    }
  }

  static getProfileExperience(
    profileId: number,
    id: number
  ): Promise<ProfileViewModelInterface.ProfileExperienceInterface[]> {
    try {
      const response = ProfileService.getExperience(profileId, id);
      return response;
    } catch (error) {
      console.error("Error getting profile title data:", error);
      throw error;
    }
  }

  static getProfileEducation(
    profileId: number,
    id: number
  ): Promise<ProfileViewModelInterface.ProfileEducationInterface[]> {
    try {
      const response = ProfileService.getEducation(profileId, id);
      return response;
    } catch (error) {
      console.error("Error getting profile title data:", error);
      throw error;
    }
  }

  static putProfileTitle(userInfo: any): Promise<any> {
    try {
      const response = ProfileService.putTitle(userInfo);
      return response;
    } catch (error) {
      console.error("Error getting profile title data:", error);
      throw error;
    }
  }
}

export default ProfileViewModel;
