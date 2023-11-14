import { AxiosResponse } from "axios";

export interface HeaderServiceInterface {
  getHeaderProfile: () => Promise<AxiosResponse<HeaderProfileData>>;
}

export interface HeaderProfileData {
  id: number;
  profileImage: string;
  myName: string;
  todayView: number;
  viewChange: string;
}
