import axios, { AxiosResponse } from "axios";
import * as UserServiceInterface from "../interface/UserServiceInterface";
import BASE_API from "@/model/config";

class UserService implements UserServiceInterface.UserServiceInterface {
  private apiUrl: string;

  constructor() {
    this.apiUrl = BASE_API;
  }

  async signUp(email: string, password: string): Promise<number> {
    const response: AxiosResponse<void> = await axios.post(
      `${this.apiUrl}/user/signup`,
      {
        email,
        password,
      }
    );

    return response.status;
  }

  async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<UserServiceInterface.LoginServiceInterface>> {
    const response: AxiosResponse<UserServiceInterface.LoginServiceInterface> =
      await axios.post(`${this.apiUrl}/user/login`, {
        email,
        password,
      });
    return response;
  }
}

export default UserService;
