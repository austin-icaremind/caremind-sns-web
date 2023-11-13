import * as FeedInterface from "./FeedInterface";

export class FeedPostImp implements FeedInterface.FeedPostInterface {
  id: number;
  content: string;
  images: { imageUrl: string | null };
  constructor(
    id: number,
    content: string,
    images: { imageUrl: string | null }
  ) {
    this.id = id;
    this.content = content;
    this.images = images;
  }
}

export class FeedListImp implements FeedInterface.FeedListInterface {
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
  };
  likesCount: number;
  commentsCount: number;

  constructor(
    id: number,
    content: string,
    createdAt: string,
    updatedAt: string,
    author: { id: number; name: string; profileImage: string; job: string },
    likes: { id: number; createdAt: string },
    images: { imageUrl: string | null },
    video: string,
    comments: {
      id: number;
      content: string;
      createdAt: string;
      updatedAt: string;
      commenter: { id: number; name: string };
    },
    likesCount: number,
    commentsCount: number
  ) {
    this.id = id;
    this.content = content;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.author = author;
    this.likes = likes;
    this.images = images;
    this.video = video;
    this.comments = comments;
    this.likesCount = likesCount;
    this.commentsCount = commentsCount;
  }
}

export class FeedMyProfileImp implements FeedInterface.FeedMyProfileInterface {
  id: number;
  profileImage: string;
  profileBackImage: string;
  myName: string;
  about: string;

  constructor(
    id: number,
    profileImage: string,
    profileBackImage: string,
    myName: string,
    about: string
  ) {
    this.id = id;
    this.profileImage = profileImage;
    this.profileBackImage = profileBackImage;
    this.myName = myName;
    this.about = about;
  }
}

export class FeedHashTagImp implements FeedInterface.FeedHashTagInterface {
  id: number;
  hashTag: {
    id: number;
    content: string;
  }[];

  constructor(
    id: number,
    hashTag: {
      id: number;
      content: string;
    }[]
  ) {
    this.id = id;
    this.hashTag = hashTag;
  }
}
