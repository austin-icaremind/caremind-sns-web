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
            Authorization: token,
          },
        }
      );
    return response;
  }

  static async deleteFeed(
    id: number
  ): Promise<AxiosResponse<FeedServiceInterface.DeleteMyFeed>> {
    const token = localStorage.getItem("token");
    const response: AxiosResponse<FeedServiceInterface.DeleteMyFeed> =
      await axios.delete(
        `${BASE_API}/feed/${id}`,

        {
          headers: {
            Authorization: token,
          },
        }
      );
    return response;
  }

  static async deleteComment(
    feedId: number,
    id: number
  ): Promise<AxiosResponse<FeedServiceInterface.DeleteMyComment>> {
    const token = localStorage.getItem("token");

    const response: AxiosResponse<FeedServiceInterface.DeleteMyComment> =
      await axios.delete(
        `${BASE_API}/feed/${feedId}/comment/${id}`,

        {
          headers: {
            Authorization: token,
          },
        }
      );
    return response;
  }

  static async postLike(
    id: number
  ): Promise<AxiosResponse<FeedServiceInterface.PostLike>> {
    const token = localStorage.getItem("token");
    const response: AxiosResponse<FeedServiceInterface.PostLike> =
      await axios.post(
        `${BASE_API}/feed/${id}/like`,
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      );

    return response;
  }

  static async postComment(
    id: number,
    content: string
  ): Promise<AxiosResponse<FeedServiceInterface.PostMyComment>> {
    const token = localStorage.getItem("token");
    const response: AxiosResponse<FeedServiceInterface.PostMyComment> =
      await axios.post(
        `${BASE_API}/feed/${id}/comment`,
        { id, content },

        {
          headers: {
            Authorization: token,
          },
        }
      );

    return response;
  }

  static async deleteLike(
    id: number
  ): Promise<AxiosResponse<FeedServiceInterface.PostLike>> {
    const token = localStorage.getItem("token");
    const response: AxiosResponse<FeedServiceInterface.PostLike> =
      await axios.delete(
        `${BASE_API}/feed/${id}/like`,

        {
          headers: {
            Authorization: token,
          },
        }
      );

    return response;
  }

  static async getFeedList(
    searchValue
  ): Promise<FeedInterface.FeedListInterface[]> {
    const token = localStorage.getItem("token");
    console.log("BASE_API", BASE_API);
    const response: AxiosResponse<FeedServiceInterface.FeedListData[]> =
      await axios.get(`/feed?${searchValue}`, {
        baseURL: `${BASE_API}`,
        headers: {
          Authorization: token,
        },
      });

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
          feedList.isLiked,
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
    const profileId = localStorage.getItem("profileId");
    const token = localStorage.getItem("token");
    const response: AxiosResponse<FeedServiceInterface.MyProfileData> =
      await axios.get(`${BASE_API}/profile/${profileId}`, {
        headers: {
          authorization: token,
        },
      });

    // await axios.get(`${BASE_API}/profile/ProfileTitle1.json`);
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

  static async postConnection(
    id: number,
    message: string | null
  ): Promise<AxiosResponse<FeedServiceInterface.PostConnection>> {
    const token = localStorage.getItem("token");
    const response: AxiosResponse<FeedServiceInterface.PostConnection> =
      await axios.post(
        `${BASE_API}/connection/user/${id}`,
        { message },
        {
          headers: {
            Authorization: token,
          },
        }
      );
    return response;
  }

  static async getProfileId(
    userId: number
  ): Promise<FeedServiceInterface.ChangeUserId> {
    const token = localStorage.getItem("token");
    const response: AxiosResponse<FeedServiceInterface.ChangeUserId> =
      await axios.get(`${BASE_API}/profile/user/${userId}`, {
        headers: {
          authorization: token,
        },
      });
    const result = response.data;

    return result;
  }
}
