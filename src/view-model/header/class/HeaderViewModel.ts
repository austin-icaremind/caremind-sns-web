import * as HeaderViewModelInterface from "../interface/HeaderViewModelInterface";
import { HeaderService } from "@/model/service/class/HeaderService";

class HeaderViewModel {
  static async getHeaderProfileData(): Promise<HeaderViewModelInterface.GetHeaderMyProfileData> {
    try {
      const response = HeaderService.getHeaderProfile();

      return response;
    } catch (error) {
      throw error;
    }
  }

  static async getHeaderData(
    id: number
  ): Promise<HeaderViewModelInterface.GetHeaderViewdata> {
    try {
      const response = await HeaderService.getHeaderProfileTitle(id);

      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default HeaderViewModel;
