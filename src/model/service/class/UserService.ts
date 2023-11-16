import axios, { AxiosResponse } from "axios";
import * as UserServiceInterface from "../interface/UserServiceInterface";
import BASE_API from "@/model/config";

export class UserService {
  static async SignUp(
    email: string,
    password: string,
    name: string
  ): Promise<AxiosResponse<UserServiceInterface.SignUpServiceInterface>> {
    const response: AxiosResponse<UserServiceInterface.SignUpServiceInterface> =
      await axios.post(`${BASE_API}/user/signup`, {
        email,
        password,
        name,
      });
    return response;
  }

  static async Login(
    email: string,
    password: string
  ): Promise<AxiosResponse<UserServiceInterface.LoginServiceInterface>> {
    const response: AxiosResponse<UserServiceInterface.LoginServiceInterface> =
      await axios.post(`${BASE_API}/user/login`, {
        email,
        password,
      });
    return response;
  }
}
