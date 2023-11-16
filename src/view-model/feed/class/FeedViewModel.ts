import { FeedService } from "@/model/service/class/FeedService";
import * as FeedViewModelInterface from "../interface/FeedViewModelInterface";
import { AxiosResponse } from "axios";

class FeedViewModel {
  static async postFeedData(content: string, images: string | null) {
    try {
      const response = await FeedService.postFeed(content, images);
      if (response.status >= 200 && response.status < 300) {
        return response.data;
      }
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
  static async getFeedMyProfileData(
    id: number
  ): Promise<FeedViewModelInterface.GetFeedMyProfileData> {
    try {
      const response = FeedService.getMyProfile(id);

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
