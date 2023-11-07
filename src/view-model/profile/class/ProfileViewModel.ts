import { Profile } from "@/model/entity/profile/Profile";
import { ProfileService } from "@/model/service/class/ProfileService";
import { ProfileViewModelInterface } from "../interface/ProfileViewModelInterface";
import { ProfileTitleData } from "../interface/ProfileViewModelInterface";
import { ProfileExperience } from "@/model/entity/profile/ProfileExperience";
import { ProfileEducation } from "@/model/entity/profile/ProfileEducation";

class ProfileViewModel implements ProfileViewModelInterface {
  async getProfileTitleData(): Promise<ProfileTitleData> {
    try {
      const getProfile = new ProfileService();
      const response = await getProfile.getTitle();

      return response;
    } catch (error) {
      console.error("Error getting profile title data:", error);
      throw error;
    }
  }

  async getProfileExperience(): Promise<ProfileExperience> {
    try {
      const getProfile = new ProfileService();
      const response = await getProfile.getExperience();

      return response;
    } catch (error) {
      console.error("Error getting profile title data:", error);
      throw error;
    }
  }

  async getProfileEducation(): Promise<ProfileEducation> {
    try {
      const getProfile = new ProfileService();
      const response = await getProfile.getEducation();
      return response;
    } catch (error) {
      console.error("Error getting profile title data:", error);
      throw error;
    }
  }
}

export default ProfileViewModel;
