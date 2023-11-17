import * as NetworkInterface from "@/model/entity/network/NetworkInterface";
import * as NetworkServiceInterface from "../interface/NetworkServiceInterface";
import * as Network from "@/model/entity/network/Network";
import axios from "axios";
import { AxiosResponse } from "axios";
import BASE_API from "@/model/config";

export class NetworkService {
  static async getRecievedConnection(): Promise<
    NetworkInterface.NetworkRecievedConnection[]
  > {
    const response: AxiosResponse<
      NetworkServiceInterface.getRecievedConnectionData[]
    > = await axios.get(`/data/network/RecievedConnection.json`);
    //  > = await axios.get(`${BASE_API}/connection/received`);
    const result = response.data.map(
      (data) =>
        new Network.NetworkRecievedConnectionImp(
          data.id,
          data.isAccepted,
          data.message,
          data.connectedUser
        )
    );
    return result;
  }

  static async getSentConnection(): Promise<
    NetworkInterface.NetworkSentConnection[]
  > {
    const response: AxiosResponse<
      NetworkServiceInterface.getSentConnectionData[]
    > = await axios.get(`/data/network/SentConnection.json`);
    // > = await axios.get(`${BASE_API}/connection/sent`);
    const result = response.data.map(
      (data) =>
        new Network.NetworkSentConnectionImp(
          data.id,
          data.isAccepted,
          data.message,
          data.connectedUser
        )
    );
    return result;
  }

  static async getMyConnection(): Promise<
    NetworkInterface.NetworkMyConnectionInterface[]
  > {
    const response: AxiosResponse<
      NetworkServiceInterface.getMyConnectionData[]
    > = await axios.get(`/data/network/MyConnection.json`);
    // > = await axios.get(`${BASE_API}/connection/connected`);

    const result = response.data.map(
      (data) =>
        new Network.NetwrokMyconnectionImp(
          data.id,
          data.isAccepted,
          data.message,
          data.connectedUser
        )
    );

    return result;
  }

  static async postAccept(
    id: number
  ): Promise<AxiosResponse<NetworkServiceInterface.postAcceptOrDeclineData>> {
    const token = localStorage.getItem("token");

    const response: AxiosResponse<NetworkServiceInterface.postAcceptOrDeclineData> =
      await axios.patch(
        `${BASE_API}connection/${id}`,
        { id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

    return response;
  }

  static async postDecline(
    id: number
  ): Promise<AxiosResponse<NetworkServiceInterface.postAcceptOrDeclineData>> {
    const token = localStorage.getItem("token");
    const response: AxiosResponse<NetworkServiceInterface.postAcceptOrDeclineData> =
      await axios.delete(`${BASE_API}/connection/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    return response;
  }
}
