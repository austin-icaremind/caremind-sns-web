import axios from "axios";

const apiUrl = "http://172.30.1.17:3000/user/login";

const LoginModel = {
  login: async (email: string, password: string) => {
    try {
      const response = await axios.post(`${apiUrl}`, {
        email,
        password,
      });

      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default LoginModel;
