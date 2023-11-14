import { FeedService } from "@/model/service/class/FeedService";
import * as FeedViewModelInterface from "../interface/FeedViewModelInterface";
import { AxiosResponse } from "axios";

class FeedViewModel {
  static async postFeedData(
    content: string,
    images: string | null
  ): Promise<AxiosResponse> {
    try {
      const response = FeedService.postFeed(content, images);
      return response;
    } catch (error) {
      throw error;
    }
  }

  static async getFeedListData(): Promise<
    FeedViewModelInterface.GetFeedListData[]
  > {
    try {
      const response = FeedService.getFeedList();

      return response;
    } catch (error) {
      throw error;
    }
  }
  static async getFeedMyProfileData(): Promise<FeedViewModelInterface.GetFeedMyProfileData> {
    try {
      const response = FeedService.getMyProfile();
      return response;
    } catch (error) {
      throw error;
    }
  }

  static async getFeedMyHashtagData(): Promise<FeedViewModelInterface.GetFeedMyHashtagData> {
    try {
      const response = FeedService.getMyHashtag();
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default FeedViewModel;
