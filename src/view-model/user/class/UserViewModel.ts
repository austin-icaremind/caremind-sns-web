import UserService from "@/model/service/class/UserService";

export class UserViewModel {
  private email: string;
  private password: string;
  private passwordCheck?: string;

  constructor(email: string, password: string, passwordCheck?: string) {
    this.email = email;
    this.password = password;
    this.passwordCheck = passwordCheck;
  }

  isEmailValid(): boolean {
    const emailRegex: RegExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return emailRegex.test(this.email);
  }

  isPasswordValid(): boolean {
    const pwRegex: RegExp =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,20}$/;
    return pwRegex.test(this.password);
  }

  doPasswordsMatch(): boolean {
    if (this.passwordCheck === undefined) {
      return true; // passwordCheck가 정의되지 않았을 경우 항상 일치로 처리
    }
    return this.password === this.passwordCheck;
  }

  async SignUp(): Promise<any> {
    if (!this.isEmailValid()) {
      // alert("이메일이 유효하지 않습니다.");
      return "emailNotPerfect";
    } else if (!this.isPasswordValid()) {
      // alert("비밀번호가 유효하지` 않습니다.");
      return "passwordNotPerfect";
    } else if (!this.doPasswordsMatch()) {
      // alert("비밀번호 확인이 일치하지 않습니다.");
      return "passwordNotMatch";
    } else {
      try {
        const postSignUp = new UserService();
        const response = await postSignUp.signUp(this.email, this.password);
        if (response >= 200 && response < 300) return "success";
      } catch (error) {
        return "duplicated";
      }
    }
  }

  async Login(): Promise<any> {
    if (this.email === "") {
      // alert("이메일을 입력해주세요");
      return "emailEmpty";
    } else if (this.email === "") {
      // alert("비밀번호를 입력해주세요");
      return "passwordEmpty";
    } else {
      try {
        const postLogin = new UserService();
        const response = await postLogin.login(this.email, this.password);
        if (response.status >= 200 && response.status < 300) {
          return response.data;
        }
      } catch (error) {
        return "wrong";
      }
    }
  }
}
export default UserViewModel;
