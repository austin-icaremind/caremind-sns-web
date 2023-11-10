import * as FeedInterface from "./FeedInterface";

export class Feed implements FeedInterface.FeedInterface {
  id: number;

  constructor(id: number) {
    this.id = id;
  }
}

export class FeedPostImp
  extends Feed
  implements FeedInterface.FeedPostInterface
{
  content: string;
  images: FeedInterface.FeedPostImageData[];
  constructor(
    id: number,
    content: string,
    images: FeedInterface.FeedPostImageData[]
  ) {
    super(id);
    this.content = content;
    this.images = images;
  }
}

export class FeedListImp
  extends Feed
  implements FeedInterface.FeedListInterface
{
  content: string;
  createdAt: string;
  updatedAt: string;
  author: string;
  likes: FeedInterface.FeedListLikesData[]; //어떤사람이 좋아요눌럿는지?
  images: FeedInterface.FeedListImageData[];
  video: string;
  comments: FeedInterface.FeedListCommentsData[]; //댓글
  likesCount: number;
  commentsCount: number;

  constructor(
    id: number,
    content: string,
    createdAt: string,
    updatedAt: string,
    author: string,
    likes: FeedInterface.FeedListLikesData[], //어떤사람이 좋아요눌럿는지?
    images: FeedInterface.FeedListImageData[],
    video: string,
    comments: FeedInterface.FeedListCommentsData[], //댓글
    likesCount: number,
    commentsCount: number
  ) {
    super(id);
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

export class FeedMyProfileImp
  extends Feed
  implements FeedInterface.FeedMyProfileInterface
{
  //   name: string;
  //   location: string;
  //   jobDescription: string;
  //   connections: number;

  constructor(id: number) {
    super(id);
  }
}

export class FeedHashTagImp
  extends Feed
  implements FeedInterface.FeedHashTagInterface
{
  //   name: string;
  //   location: string;
  //   jobDescription: string;
  //   connections: number;

  constructor(id: number) {
    super(id);
  }
}
