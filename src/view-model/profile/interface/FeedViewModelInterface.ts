import * as FeedInterface from "@/model/entity/feed/FeedInterface";

export interface FeedViewModelInterface {
  postFeedData: () => Promise<FeedInterface.FeedPostInterface>;
  getFeedListData: () => Promise<FeedInterface.FeedListInterface>;
  getFeedMyProfileData: () => Promise<FeedInterface.FeedMyProfileInterface>;
  getFeedMyHashtagData: () => Promise<FeedInterface.FeedHashTagInterface>;
}

export interface PostFeedData {
  content: string;
  images: PostInsideImageData[];
}

export interface GetFeedListData {
  id: number;
  imageUrl: string;
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
export interface GetFeedMyProfileData {
  id: number;
}
export interface GetFeedMyHashtagData {
  id: number;
}

export interface PostInsideImageData {
  imageUrl: string;
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
