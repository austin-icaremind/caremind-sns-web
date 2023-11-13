export interface FeedViewModelInterface {
  postFeedData: () => Promise<PostFeedData>;
  getFeedListData: () => Promise<GetFeedListData[]>;
  getFeedMyProfileData: () => Promise<GetFeedMyProfileData>;
  getFeedMyHashtagData: () => Promise<GetFeedMyHashtagData>;
}

export interface PostFeedData {
  id: number;
  content: string;
  images: { imageUrl: string };
}

export interface GetFeedListData {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  author: { id: number; name: string; profileImage: string; job: string };
  likes: { id: number; createdAt: string }; //어떤사람이 좋아요눌럿는지?
  images: { imageUrl: string };
  video: string;
  comments: {
    id: number;
    content: string;
    createdAt: string;
    updatedAt: string;
    commenter: { id: number; name: string };
  }; //댓글
  likesCount: number;
  commentsCount: number;
}

export interface GetFeedMyProfileData {
  id: number;
  profileImage: string;
  profileBackImage: string;
  myName: string;
  about: string;
}
export interface GetFeedMyHashtagData {
  id: number;
  hashTag: {
    id: number;
    content: string;
  }[];
}
