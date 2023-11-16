import axios, { AxiosResponse } from "axios";
import * as Feed from "@/model/entity/feed/Feed";
import * as FeedInterface from "@/model/entity/feed/FeedInterface";
import * as FeedServiceInterface from "../interface/FeedServiceInterface";

import BASE_API from "@/model/config";

export class FeedService {
  static async postFeed(
    content: string,
    images: string | null
  ): Promise<AxiosResponse<FeedServiceInterface.PostMyFeedData>> {
    const token = localStorage.getItem("token");
    const response: AxiosResponse<FeedServiceInterface.PostMyFeedData> =
      await axios.post(
        `${BASE_API}/feed`,
        {
          content,
          images,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    return response;
  }

  static async getFeedList(): Promise<FeedInterface.FeedListInterface[]> {
    const response: AxiosResponse<FeedServiceInterface.FeedListData[]> =
      await axios.get(`${BASE_API}/feed/Feed.json`);
    // await axios.get(`${BASE_API}/feed`);

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

    return result;
  }

  static async getMyProfile(
    id: number
  ): Promise<FeedInterface.FeedMyProfileInterface> {
    const response: AxiosResponse<FeedServiceInterface.MyProfileData> =
      await axios.get(`${BASE_API}/profile/ProfileTitle${id}.json`);
    const result = new Feed.FeedMyProfileImp(
      response.data.id,
      response.data.profileBackImage,
      response.data.about,
      response.data.user
    );

    return result;
  }

  static async getMyHashtag(): Promise<FeedInterface.FeedHashTagInterface> {
    const response: AxiosResponse<FeedServiceInterface.HashTagData> =
      await axios.get(`/data/feed/MyHashtag.json`);
    const result = new Feed.FeedHashTagImp(
      response.data.id,
      response.data.hashTag
    );
    return result;
  }
}
