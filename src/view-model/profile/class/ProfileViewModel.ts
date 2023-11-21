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
    id: number
  ): Promise<ProfileViewModelInterface.ProfileProjectsInterface[]> {
    try {
      const response = ProfileService.getProjects(id);

      return response;
    } catch (error) {
      console.error("Error getting profile title data:", error);
      throw error;
    }
  }

  static getProfileExperience(
    id: number
  ): Promise<ProfileViewModelInterface.ProfileExperienceInterface[]> {
    try {
      const response = ProfileService.getExperience(id);
      return response;
    } catch (error) {
      console.error("Error getting profile title data:", error);
      throw error;
    }
  }

  static getProfileEducation(
    id: number
  ): Promise<ProfileViewModelInterface.ProfileEducationInterface[]> {
    try {
      const response = ProfileService.getEducation(id);
      return response;
    } catch (error) {
      console.error("Error getting profile title data:", error);
      throw error;
    }
  }
}

export default ProfileViewModel;
