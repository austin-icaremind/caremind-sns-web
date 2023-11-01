import axios from "axios";

const apiUrl = "api주소";

const LoginModel = {
  login: async (email: string, password: string) => {
    try {
      const response = await axios.post(`${apiUrl}`, {
        email: email,
        password: password,
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default LoginModel;
