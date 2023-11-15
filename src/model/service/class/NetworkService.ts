import * as NetworkInterface from "@/model/entity/network/NetworkInterface";
import * as NetwrokServiceInterface from "../interface/NetworkServiceInterface";
import * as Network from "@/model/entity/network/Network";
import axios from "axios";
import { AxiosResponse } from "axios";

export class NetworkService {
  static async getNewConnection(): Promise<NetworkInterface.NetworkNewConnectionInterface> {
    const response: AxiosResponse<NetwrokServiceInterface.getNewConnectionData> =
      await axios.get(`/data/network/NewConnection.json`);
    const result = new Network.NetworkNewConnectionImp(
      response.data.id,
      response.data.profileImage,
      response.data.userName,
      response.data.userJob,
      response.data.connection,
      response.data.explanation
    );
    return result;
  }

  static async getRecentConnection(): Promise<NetworkInterface.NetworkRecentConnectionInterface> {
    const response: AxiosResponse<NetwrokServiceInterface.getRecentConnectionDate> =
      await axios.get(`/data/network/RecentConnection.json`);
    const result = new Network.NetworkRecentConnectionImp(
      response.data.id,
      response.data.profileImage,
      response.data.userName,
      response.data.position,
      response.data.date
    );
    return result;
  }
}
