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

  static async CheckProfileId(): Promise<any> {
    const response: AxiosResponse<UserServiceInterface.SignUpServiceInterface> =
      await axios.get(
        `${BASE_API}/profile/profileId`,

        {
          headers: {
            authorization: localStorage.getItem("token"), // 헤더에 토큰 추가
          },
        }
      );

    return response;
  }

  static async CreateProfile(): Promise<any> {
    const response: AxiosResponse<UserServiceInterface.SignUpServiceInterface> =
      await axios.post(
        `${BASE_API}/profile`,

        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
    return response;
  }
}
