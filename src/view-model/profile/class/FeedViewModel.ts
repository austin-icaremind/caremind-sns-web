import { FeedService } from "@/model/service/class/FeedService";
import * as FeedViewModelInterface from "../interface/FeedViewModelInterface";

class FeedViewModel implements FeedViewModelInterface.FeedViewModelInterface {
  async postFeedData(): Promise<FeedViewModelInterface.PostFeedData> {
    try {
      const postFeed = new FeedService();
      const response = postFeed.postFeed();
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getFeedListData(): Promise<FeedViewModelInterface.GetFeedListData> {
    try {
      const getFeedList = new FeedService();
      const response = getFeedList.getFeedList();

      return response;
    } catch (error) {
      throw error;
    }
  }
  async getFeedMyProfileData(): Promise<FeedViewModelInterface.GetFeedMyProfileData> {
    try {
      const getMyProfile = new FeedService();
      const response = getMyProfile.getMyProfile();
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getFeedMyHashtagData(): Promise<FeedViewModelInterface.GetFeedMyHashtagData> {
    try {
      const getMyHashtag = new FeedService();
      const response = getMyHashtag.getMyHashtag();
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default FeedViewModel;
