import axios, { AxiosResponse } from "axios";
import * as HeaderInterface from "@/model/entity/header/HeaderInterface";
import * as HeaderServiceInterface from "../interface/HeaderServiceInterface";
import * as Header from "@/model/entity/header/Header";

import BASE_API from "@/model/config";

export class HeaderService {
  static async getHeaderProfile(): Promise<HeaderInterface.HeaderProfileInterface> {
    const response: AxiosResponse<HeaderServiceInterface.HeaderProfileData> =
      await axios.get(`/data/header/MyProfile.json`);
    const result = new Header.HeaderProfileInf(
      response.data.id,
      response.data.profileImage,
      response.data.myName,
      response.data.todayView,
      response.data.viewChange
    );
    return result;
  }
  static async getHeaderProfileTitle(
    id: number
  ): Promise<HeaderServiceInterface.HeaderProfileTitleData> {
    const userId = localStorage.getItem("userId");
    const response: AxiosResponse<HeaderServiceInterface.HeaderProfileTitleData> =

      await axios.get(`${BASE_API}/profile/${userId}`);

    // await axios.get(`${BASE_API}/profile/profileTitle1.json`);
    const result = response.data;

    return result;
  }
}
