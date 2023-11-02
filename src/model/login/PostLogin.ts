import axios from "axios";

class PostLogin {
  private email: string;
  private password: string;
  private apiUrl: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
    this.apiUrl = "http://172.30.1.17:3000/user/login";
  }

  async Login() {
    return axios.post(this.apiUrl, {
      email: this.email,
      password: this.password,
    });
  }
}

export default PostLogin;
