import axios, { AxiosResponse, AxiosError } from "axios";

class PostSignUp {
  private email: string;
  private password: string;
  private apiUrl: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
    this.apiUrl = "http://10.58.52.158:8000/users/";
  }

  async signUp() {
    alert(`맨밑 ${this.email} ${this.password}`);
  }

  // async signUp(): Promise<AxiosResponse | AxiosError> {
  //   try {
  //     const response = await axios.post(this.apiUrl, {
  //       email: this.email,
  //       password: this.password,
  //     });

  //     return response;
  //   } catch (error) {
  //     console.error("Sign-up failed:", error);
  //     throw error;
  //   }
  // }
}

export default PostSignUp;
