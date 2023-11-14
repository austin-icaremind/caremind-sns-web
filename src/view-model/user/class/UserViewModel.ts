import { UserService } from "@/model/service/class/UserService";

export class UserViewModel {
  static async SignUp(email: string, password: string, passwordCheck: string) {
    const emailRegex: RegExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const pwRegex: RegExp =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,20}$/;

    if (!emailRegex.test(email)) {
      return "emailNotPerfect";
    } else if (!pwRegex.test(password)) {
      return "passwordNotPerfect";
    } else if (password !== passwordCheck) {
      return "passwordNotMatch";
    } else {
      try {
        const response = await UserService.SignUp(email, password);
        if (response.status >= 200 && response.status < 300) {
          return "success";
        } else return "duplicated";
      } catch (error) {
        return "error";
      }
    }
  }

  static async Login(email: string, password: string) {
    if (email === "") {
      return "emailEmpty";
    } else if (password === "") {
      return "passwordEmpty";
    } else {
      try {
        const response = await UserService.Login(email, password);
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
