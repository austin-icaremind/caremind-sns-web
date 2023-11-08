import axios, { AxiosResponse } from "axios";
import { UserServiceModel } from "../interface/UserServiceInterface";
import BASE_API from "@/model/config";

class UserService implements UserServiceModel {
  private apiUrl: string;

  constructor() {
    this.apiUrl = BASE_API;
  }

  async signUp(email: string, password: string): Promise<number> {
    const response: AxiosResponse<number> = await axios.post(
      `${this.apiUrl}/user/signup`,
      {
        email,
        password,
      }
    );
    console.log("코드", response.status);
    return response.status;
  }

  async login(email: string, password: string): Promise<any> {
    const response: AxiosResponse<number> = await axios.post(
      `${this.apiUrl}/user/login`,
      {
        email,
        password,
      }
    );
    console.log(response);
    return response;
  }
}

export default UserService;
