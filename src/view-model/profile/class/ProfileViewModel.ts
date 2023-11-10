import * as Profile from "@/model/entity/profile/Profile";
import * as ProfileInterface from "@/model/entity/profile/ProfileInterface";
import * as ProfileViewModelInterface from "../interface/ProfileViewModelInterface";
import { ProfileService } from "@/model/service/class/ProfileService";

class ProfileViewModel
  implements ProfileViewModelInterface.ProfileViewModelInterface
{
  async getProfileTitleData(
    id: number
  ): Promise<ProfileViewModelInterface.ProfileTitleInterface> {
    try {
      const getProfile = new ProfileService();
      const response = await getProfile.getTitle(id);

      return response;
    } catch (error) {
      console.error("Error getting profile title data:", error);
      throw error;
    }
  }

  async getProjectsData(
    id: number
  ): Promise<ProfileViewModelInterface.ProfileProjectsInterface> {
    try {
      const getProjects = new ProfileService();
      const response = await getProjects.getProjects(id);
      console.log(response);
      return response;
    } catch (error) {
      console.error("Error getting profile title data:", error);
      throw error;
    }
  }

  async getProfileExperience(
    id: number
  ): Promise<ProfileViewModelInterface.ProfileExperienceInterface> {
    try {
      const getProfile = new ProfileService();
      const response = await getProfile.getExperience(id);

      return response;
    } catch (error) {
      console.error("Error getting profile title data:", error);
      throw error;
    }
  }

  async getProfileEducation(
    id: number
  ): Promise<ProfileViewModelInterface.ProfileEducationInterface> {
    try {
      const getProfile = new ProfileService();
      const response = await getProfile.getEducation(id);
      return response;
    } catch (error) {
      console.error("Error getting profile title data:", error);
      throw error;
    }
  }
}

export default ProfileViewModel;
