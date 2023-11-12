import * as FeedInterface from "@/model/entity/feed/FeedInterface";

export interface FeedServiceInterface {
  postFeed: () => Promise<FeedInterface.FeedPostInterface>;
  getFeedList: () => Promise<FeedInterface.FeedListInterface>;
  getMyProfile: () => Promise<FeedInterface.FeedMyProfileInterface>;
  getMyHashtag: () => Promise<FeedInterface.FeedHashTagInterface>;
}
//피드 post//
export interface PostMyFeedData {
  id: number;
  content: string;
  images: FeedPostInsideImage[];
}

export interface FeedPostInsideImage {
  imageUrl: string;
}

//피드 리스트 get//
export interface FeedListData {
  content: string;
  createdAt: string;
  updatedAt: string;
  author: string;
  likes: WhoLikesData[]; //어떤사람이 좋아요눌럿는지?
  images: FeedInsideImageData[];
  video: string;
  comments: WhoCommentsData[]; //댓글
  likesCount: number;
  commentsCount: number;
}

export interface PostMyFeedData {
  id: number;
  content: string;
  images: FeedPostInsideImage[];
}

export interface FeedListData {
  id: number;
}
export interface WhoLikesData {
  id: number;
  createdAt: string;
}

export interface FeedInsideImageData {
  imageUrl: string;
}

export interface WhoCommentsData {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  commenter: CommenterData[];
}

export interface CommenterData {
  id: number;
  name: string;
}

// 피드속 내 프로필 //
export interface MyProfileData {
  id: number;
}

//피드속 해시태그//
export interface HashTagData {
  id: number;
}
