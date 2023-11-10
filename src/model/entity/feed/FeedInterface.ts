export interface FeedInterface {
  id: number;
}

export interface FeedPostInterface extends FeedInterface {
  content: string;
  images: FeedPostImageData[];
}

export interface FeedListInterface extends FeedInterface {
  content: string;
  createdAt: string;
  updatedAt: string;
  author: string;
  likes: FeedListLikesData[]; //어떤사람이 좋아요눌럿는지?
  images: FeedListImageData[];
  video: string;
  comments: FeedListCommentsData[]; //댓글
  likesCount: number;
  commentsCount: number;
} //피드 게시글 get 데이터//

export interface FeedMyProfileInterface extends FeedInterface {}
//피드페이지속 나의 프로필//

export interface FeedHashTagInterface extends FeedInterface {}
//피드페이지속 나의 프로필 아래 해시태그//

export interface FeedPostImageData {
  imageUrl: string;
}

export interface FeedListLikesData {
  id: number;
  createdAt: string;
}

export interface FeedListImageData {
  imageUrl: string;
}

export interface FeedListCommentsData {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  commenter: CommenterData[];
}

export interface CommenterData {
  //댓글작성 유저의 정보//
  id: number;
  name: string;
}
