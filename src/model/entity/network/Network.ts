import * as NetworkInterface from "./NetworkInterface";

export class NetworkNewConnectionImp
  implements NetworkInterface.NetworkNewConnectionInterface
{
  id: number;
  profileImage: string;
  userName: string;
  userJob: string;
  connection: number;
  explanation: string;

  constructor(
    id: number,
    profileImage: string,
    userName: string,
    userJob: string,
    connection: number,
    explanation: string
  ) {
    this.id = id;
    this.profileImage = profileImage;
    this.userName = userName;
    this.userJob = userJob;
    this.connection = connection;
    this.explanation = explanation;
  }
}

export class NetworkRecentConnectionImp
  implements NetworkInterface.NetworkRecentConnectionInterface
{
  id: number;
  profileImage: string;
  userName: string;
  position: string;
  date: string;
  constructor(
    id: number,
    profileImage: string,
    userName: string,
    position: string,
    date: string
  ) {
    this.id = id;
    this.profileImage = profileImage;
    this.userName = userName;
    this.position = position;
    this.date = date;
  }
}
