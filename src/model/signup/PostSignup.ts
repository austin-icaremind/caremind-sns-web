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
    try {
      const response = await axios.post(this.apiUrl, {
        email: this.email,
        password: this.password,
      });
      const message = response.data.message;
      if (message === "KEY ERROR(password)") {
        alert("비밀번호를 다시 확인해주세욧");
      }
    } catch (error) {
      console.error("Sign-up failed:", error);
      throw error;
    }
  }
}

export default PostSignUp;
