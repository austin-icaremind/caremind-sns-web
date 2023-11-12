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
}

export default FeedViewModel;

// async getProfileTitleData(): Promise<Profile.ProfileTitleImp> {
//   try {
//     const getProfile = new ProfileService();
//     const response = await getProfile.getTitle();

//     return response;
//   } catch (error) {
//     console.error("Error getting profile title data:", error);
//     throw error;
//   }
