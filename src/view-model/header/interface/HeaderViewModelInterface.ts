export interface HeaderViewModelInterface {
  getHeaderProfileData: () => Promise<GetFeedMyProfileData>;
}

export interface GetFeedMyProfileData {
  id: number;
  profileImage: string;
  myName: string;
  todayView: number;
  viewChange: string;
}
