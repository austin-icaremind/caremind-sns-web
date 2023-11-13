import { AxiosResponse } from "axios";

export interface UserServiceInterface {
  signUp: (email: string, password: string) => Promise<number>;
  login: (
    email: string,
    password: string
  ) => Promise<AxiosResponse<LoginServiceInterface>>;
}

export interface SignUpServiceInterface {}

export interface LoginServiceInterface {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    phoneNumber: string;
    profileImage: string;
  };
}
