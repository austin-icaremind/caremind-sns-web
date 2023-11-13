export interface FeedServiceInterface {
  postFeed: (id: number) => Promise<PostMyFeedData>;
  getFeedList: () => Promise<FeedListData[]>;
  getMyProfile: (id: number) => Promise<MyProfileData>;
  getMyHashtag: (id: number) => Promise<HashTagData>;
}
//피드 post//
export interface PostMyFeedData {
  id: number;
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
  profileImage: string;
  profileBackImage: string;
  myName: string;
  about: string;
}

//피드속 해시태그//
export interface HashTagData {
  id: number;
  hashTag: {
    id: number;
    content: string;
  }[];
}
