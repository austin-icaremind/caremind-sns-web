export interface NetwrokServiceInterface {
  getNewConnection: () => Promise<getNewConnectionData>;
  getRecentConnection: () => Promise<getRecentConnectionDate>;
}

export interface getNewConnectionData {
  id: number;
  profileImage: string;
  userName: string;
  userJob: string;
  connection: number;
  explanation: string;
}

export interface getRecentConnectionDate {
  id: number;
  profileImage: string;
  userName: string;
  position: string;
  date: string;
}
