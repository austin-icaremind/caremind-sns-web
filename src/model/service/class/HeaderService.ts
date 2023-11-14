import axios, { AxiosResponse } from "axios";
import * as HeaderServiceInterface from "../interface/HeaderServiceInterface";

import BASE_API from "@/model/config";

export class HeaderService {
  static async getHeaderProfile(): Promise<HeaderServiceInterface.HeaderProfileData> {
    const response: AxiosResponse<HeaderServiceInterface.HeaderProfileData> =
      await axios.get(`/data/header/MyProfile.json`);
    return response.data;
  }
}
