import * as FeedInterface from "@/model/entity/feed/FeedInterface";

export interface FeedViewModelInterface {
  postFeed: () => Promise<FeedInterface.FeedPostInterface>;
  getFeedList: () => Promise<FeedInterface.FeedListInterface>;
  getFeedMyProfile: () => Promise<FeedInterface.FeedMyProfileInterface>;
  getFeedMyHashtag: () => Promise<FeedInterface.FeedHashTagInterface>;
}
