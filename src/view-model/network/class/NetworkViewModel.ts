import * as NetworkViewModelInterface from "../interface/NetworkViewModelInterface";
import { NetworkService } from "@/model/service/class/NetworkService";

export class NetworkViewModel {
  static getRecievedConnection(): Promise<
    NetworkViewModelInterface.NetworkRecievedInterface[]
  > {
    try {
      const response = NetworkService.getRecievedConnection();
      return response;
    } catch (error) {
      console.error("Error getting profile title data:", error);
      throw error;
    }
  }

  static getSentConnection(): Promise<
    NetworkViewModelInterface.NetworkSentInterface[]
  > {
    try {
      const response = NetworkService.getSentConnection();
      return response;
    } catch (error) {
      console.error("Error getting profile title data:", error);
      throw error;
    }
  }
  static getMyConnection(): Promise<
    NetworkViewModelInterface.NetworkMyConnectionInterface[]
  > {
    try {
      const response = NetworkService.getMyConnection();

      return response;
    } catch (error) {
      console.error("Error getting profile title data:", error);
      throw error;
    }
  }

  static async RecievedAccept(id: number) {
    if (id === null) {
      return "error occur";
    }
    try {
      const response = await NetworkService.postAccept(id);
      if (response.status >= 200 && response.status < 300) {
        return response.data;
      }
    } catch (error) {
      return "wrong";
    }
  }

  static async RecievedDecline(id: number) {
    if (id === null) {
      return "error occur";
    }
    try {
      const response = await NetworkService.postAccept(id);
      if (response.status >= 200 && response.status < 300) {
        return response.data;
      }
    } catch (error) {
      return "wrong";
    }
  }
}

export default NetworkViewModel;
