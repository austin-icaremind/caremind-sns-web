import LoginModel from "@/model/login/page";
import { useRouter } from "next/navigation";

// const router = useRouter();
// const handleNavigate = () => {
//
// };

class LoginViewModel {
  handleLogin = async (email: string, password: string) => {
    if (email === "") {
      alert("이메일을 입력해주세요");
    } else if (password === "") {
      alert("비밀번호를 입력해주세요");
    }
    try {
      const router = useRouter();
      const data = await LoginModel.login(email, password);
      if (data.message === "LOGIN_SUCCESS") {
        alert("로그인이 성공했습니다");
        router.push("/");
        localStorage.setItem("loginToken", data.token);
      } else if (data.message === "NOT_REGISTERED") {
        alert("이메일이 존재하지 않습니다");
      } else if (data.message === "WRONG_PASSWORD") {
        alert("비밀번호가 틀렸습니다");
      }
    } catch (error) {
      console.error("Request error:", error);
    }
  };
}

export default LoginViewModel;
