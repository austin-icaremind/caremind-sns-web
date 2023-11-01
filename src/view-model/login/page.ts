import LoginModel from "@/model/login/page";

class LoginViewModel {
  handleLogin = async (
    email: string,
    password: string,
    completion: () => void,
    fail?: () => void
  ) => {
    if (email === "") {
      alert("이메일을 입력해주세요");
    } else if (password === "") {
      alert("비밀번호를 입력해주세요");
    }
    try {
      const response = await LoginModel.login(email, password);
      const responseData = response.data;
      console.log(response);
      if (response.status === 200) {
        alert("로그인이 성공했습니다");
        localStorage.setItem("token", responseData.token);
        completion();
      }
      // else if (response.message === "USER_NOT_FOUND") {
      //   alert("이메일이 존재하지 않습니다");
      // } else if (response.message === "WRONG_PASSWORD") {
      //   alert("비밀번호가 틀렸습니다");
      //   fail ? fail() : undefined;
      // }
    } catch (error) {
      console.log(error.response.status, ">>");
      if (error.response.status === 404) {
        alert("이메일이 틀렸습니다");
      } else if (error.response.status === 400) {
        alert("비밀번호가 틀렸습니다");
        fail ? fail() : undefined;
      }
      // console.log("Request error:", error);
    }
  };
}

export default LoginViewModel;
