import axios from "axios";

class PostSignUp {
  private email: string;
  private password: string;
  private apiUrl: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
    this.apiUrl = "http://172.30.1.28:3000/user/signup";
  }

  async signUp(): Promise<any> {
    return axios.post(this.apiUrl, {
      email: this.email,
      password: this.password,
    });
  }
}

export default PostSignUp;
