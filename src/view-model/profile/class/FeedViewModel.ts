import { FeedService } from "@/model/service/class/FeedService";
import * as FeedViewModelInterface from "../interface/FeedViewModelInterface";

class FeedViewModel implements FeedViewModelInterface.FeedViewModelInterface {
  async postFeedData(): Promise<FeedViewModelInterface.PostFeedData> {
    try {
      const postFeed = new FeedService();
    } catch {}
  }
}
