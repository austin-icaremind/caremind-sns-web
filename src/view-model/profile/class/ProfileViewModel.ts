import * as Profile from "@/model/entity/profile/Profile";
import { ProfileService } from "@/model/service/class/ProfileService";
import { ProfileViewModelInterface } from "../interface/ProfileViewModelInterface";

class ProfileViewModel implements ProfileViewModelInterface {
  async getProfileTitleData(id: number): Promise<Profile.ProfileTitleImp> {
    try {
      const getProfile = new ProfileService();
      const response = await getProfile.getTitle(id);

      return response;
    } catch (error) {
      console.error("Error getting profile title data:", error);
      throw error;
    }
  }

  async getProfileExperience(
    id: number
  ): Promise<Profile.ProfileExperienceImp> {
    try {
      const getProfile = new ProfileService();
      const response = await getProfile.getExperience(id);

      return response;
    } catch (error) {
      console.error("Error getting profile title data:", error);
      throw error;
    }
  }

  async getProfileEducation(id: number): Promise<Profile.ProfileEducationImp> {
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
