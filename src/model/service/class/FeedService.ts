import axios, { AxiosResponse } from "axios";
import * as Feed from "@/model/entity/feed/Feed";
import * as FeedInterface from "@/model/entity/feed/FeedInterface";
import * as FeedServiceInterface from "../interface/FeedServiceInterface";

import BASE_API from "@/model/config";

export class FeedService implements FeedServiceInterface.FeedServiceInterface {
  private apiUrl: string;

  constructor() {
    // this.apiUrl = "BASE_API";
    this.apiUrl = "/data";
  }
  async postFeed(): Promise<FeedInterface.FeedPostInterface> {
    const response: AxiosResponse<FeedServiceInterface.PostMyFeedData> =
      await axios.post(`${this.apiUrl}/feed/Feed.json`);
    const result = new Feed.FeedPostImp(
      response.data.id,
      response.data.content,
      response.data.images
    );
    return result;
  }

  async getFeedList(): Promise<FeedInterface.FeedListInterface[]> {
    const response: AxiosResponse<FeedServiceInterface.FeedListData[]> =
      await axios.get(`${this.apiUrl}/feed/Feed.json`);

    const result = response.data.map(
      (feedList) =>
        new Feed.FeedListImp(
          feedList.id,
          feedList.content,
          feedList.createdAt,
          feedList.updatedAt,
          feedList.author,
          feedList.likes,
          feedList.images,
          feedList.video,
          feedList.comments,
          feedList.likesCount,
          feedList.commentsCount
        )
    );
    // const result = new Feed.FeedListImp(
    //   response.data.id,
    //   response.data.content,
    //   response.data.createdAt,
    //   response.data.updatedAt,
    //   response.data.author,
    //   response.data.likes,
    //   response.data.images,
    //   response.data.video,
    //   response.data.comments,
    //   response.data.likesCount,
    //   response.data.commentsCount
    // );
    console.log(result, "<<<<<<");
    return result;
  }

  async getMyProfile(): Promise<FeedInterface.FeedMyProfileInterface> {
    const response: AxiosResponse<FeedServiceInterface.MyProfileData> =
      await axios.get(`${this.apiUrl}/feed/MyProfile.json`);
    const result = new Feed.FeedMyProfileImp(
      response.data.id,
      response.data.profileImage,
      response.data.profileBackImage,
      response.data.myName,
      response.data.about
    );

    return result;
  }

  async getMyHashtag(): Promise<FeedInterface.FeedHashTagInterface> {
    const response: AxiosResponse<FeedServiceInterface.HashTagData> =
      await axios.get(`${this.apiUrl}/feed/MyHashtag.json`);
    const result = new Feed.FeedHashTagImp(
      response.data.id,
      response.data.hashTag
    );
    return result;
  }
}
