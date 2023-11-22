import { FeedService } from "@/model/service/class/FeedService";
import * as FeedViewModelInterface from "../interface/FeedViewModelInterface";
import { AxiosError, AxiosResponse } from "axios";

class FeedViewModel {
  static async postFeedData(content: string, images: string | null) {
    try {
      const response = await FeedService.postFeed(content, images);
      if (response.status >= 200 && response.status < 300) {
        const result = await this.getFeedListData();
        return result;
      }
    } catch (error) {
      throw error;
    }
  }

  static async deleteFeed(id: number) {
    try {
      const response = await FeedService.deleteFeed(id);
      if (response.status >= 200 && response.status < 300) {
        const result = await this.getFeedListData();
        return result;
      }
    } catch (error) {
      throw error;
    }
  }

  static async postLikeData(id: number) {
    try {
      const response = await FeedService.postLike(id);
      if (response.status >= 200 && response.status < 300) {
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  }
  static async postMyComment(id: number, content: string) {
    try {
      const response = await FeedService.postComment(id, content);
      if (response.status >= 200 && response.status < 300) {
        const result = await this.getFeedListData();
        return result;
      }
    } catch (error) {
      throw error;
    }
  }

  static async deleteLikeData(id: number) {
    try {
      const response = await FeedService.deleteLike(id);
      if (response.status >= 200 && response.status < 300) {
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  }

  static async deleteComment(id: number) {
    try {
      const response = await FeedService.deleteComment(id);
      if (response.status >= 200 && response.status < 300) {
        const result = await this.getFeedListData();
        return result;
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

  static async postConnectionData(id: number, message: string | null) {
    try {
      const response = await FeedService.postConnection(id, message);

      if ((response.status = 201)) {
        alert("친구 신청을 보냈습니다");

        return response.data;
      }
    } catch (error: any) {
      if (error.response.status === 400) {
        alert("이미 친구 신청을 보냈습니다");
      } else {
        alert("서버 오류");
      }
    }
  }

  static getProfileId(
    id: number
  ): Promise<FeedViewModelInterface.getProfileIdData> {
    try {
      const response = FeedService.getProfileId(id);
      return response;
    } catch (error) {
      console.error("Error getting profile title data:", error);
      throw error;
    }
  }
}

export default FeedViewModel;
