import { AxiosResponse } from "axios";

export interface FeedServiceInterface {
  postFeed: (
    content: string,
    images: string | null
  ) => Promise<AxiosResponse<void>>;
  getFeedList: () => Promise<FeedListData[]>;
  getMyProfile: (id: number) => Promise<MyProfileData>;
  getMyHashtag: (id: number) => Promise<HashTagData>;
}
//피드 post//
export interface PostMyFeedData {
  content: string;
  images: { imageUrl: string | null };
}

//피드 리스트 get//
export interface FeedListData {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  author: { id: number; name: string; profileImage: string; job: string };
  likes: { id: number; createdAt: string }; //어떤사람이 좋아요눌럿는지?
  images: { imageUrl: string | null };
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

// 피드속 내 프로필 //
export interface MyProfileData {
  id: number;
  profileBackImage: string;
  about: string;
  user: {
    id: number;
    name: string;
    profileImage: string;
  };
}

//피드속 해시태그//
export interface HashTagData {
  id: number;
  hashTag: {
    id: number;
    content: string;
  }[];
}
