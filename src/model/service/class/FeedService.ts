import axios, { AxiosResponse } from "axios";
import * as Feed from "@/model/entity/feed/Feed";
import * as FeedInterface from "@/model/entity/feed/FeedInterface";
import * as FeedServiceInterface from "../interface/FeedServiceInterface";

import BASE_API from "@/model/config";

class FeedService implements FeedServiceInterface.FeedServiceInterface {
  private apiUrl: string;

  constructor() {
    this.apiUrl = "BASE_API";
  }
  async postFeed(): Promise<FeedInterface.FeedPostInterface> {
    const response: AxiosResponse<FeedServiceInterface.PostMyFeedData> =
      await axios.post(`${this.apiUrl}/Feed.json`);
    const result = new Feed.FeedPostImp(
      response.data.id,
      response.data.content,
      response.data.images
    );
    return result;
  }

  async getFeedList(): Promise<FeedInterface.FeedListInterface> {
    const response: AxiosResponse<FeedServiceInterface.FeedListData> =
      await axios.get(`${this.apiUrl}/Feed.json`);

    const result = new Feed.FeedListImp(
      response.data.id,
      response.data.content,
      response.data.createdAt,
      response.data.updatedAt,
      response.data.author,
      response.data.likes,
      response.data.images,
      response.data.video,
      response.data.comments,
      response.data.likesCount,
      response.data.commentsCount
    );

    return result;
  }

  async getMyProfile(): Promise<FeedInterface.FeedMyProfileInterface> {
    const response: AxiosResponse<FeedServiceInterface.MyProfileData> =
      await axios.get(`${this.apiUrl}/Feed.json`);
    const result = new Feed.FeedMyProfileImp(response.data.id);
    return result;
  }

  async getMyHashtag(): Promise<FeedInterface.FeedHashTagInterface> {
    const response: AxiosResponse<FeedServiceInterface.HashTagData> =
      await axios.get(`${this.apiUrl}/Feed.json`);
    const result = new Feed.FeedHashTagImp(response.data.id);
    return result;
  }
}
