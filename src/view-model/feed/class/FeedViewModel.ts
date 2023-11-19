import { FeedService } from "@/model/service/class/FeedService";
import * as FeedViewModelInterface from "../interface/FeedViewModelInterface";
import { AxiosResponse } from "axios";

class FeedViewModel {
  static async postFeedData(content: string, images: string | null) {
    try {
      const response = await FeedService.postFeed(content, images);
      if (response.status >= 200 && response.status < 300) {
        alert("게시글이 등록되었습니다");
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  }

  static async deleteFeed(id: number) {
    try {
      const response = await FeedService.deleteFeed(id);
      if (response.status >= 200 && response.status < 300) {
        alert("게시글이 삭제되었습니다");
        return response.data;
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
        alert("댓글이 등록되었습니다");
        return response.data;
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
        alert("댓글이 삭제되었습니다");
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
