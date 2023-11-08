export interface UserServiceModel {
  signUp: (email: string, password: string) => Promise<number>;
  login: (email: string, password: string) => Promise<number>;
}
