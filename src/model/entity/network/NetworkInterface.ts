export interface NetworkNewConnectionInterface {
  id: number;
  profileImage: string;
  userName: string;
  userJob: string;
  connection: number;
  explanation: string;
}

export interface NetworkRecentConnectionInterface {
  id: number;
  profileImage: string;
  userName: string;
  position: string;
  date: string;
}
