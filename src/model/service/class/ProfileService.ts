import axios, { AxiosResponse } from "axios";
import * as ProfileServiceInterface from "../interface/ProfileServiceInterface";
import * as Profile from "@/model/entity/profile/Profile";
import * as ProfileInterface from "@/model/entity/profile/ProfileInterface";
import BASE_API from "@/model/config";

export class ProfileService {
  static async getTitle(
    id: number
  ): Promise<ProfileInterface.ProfileTitleInterface> {
    const response: AxiosResponse<ProfileServiceInterface.ProfileTitleInterface> =
      await axios.get(`${BASE_API}/profile/${id}`, {
        headers: {
          authorization: localStorage.getItem("token"), // 헤더에 토큰 추가
        },
      });
    // await axios.get(`${BASE_API}/profile/ProfileTitle${id}.json`);
    const result = new Profile.ProfileTitleImp(
      response.data.id,
      response.data.profileBackImage,
      response.data.location,
      response.data.address,
      response.data.jobDescription,
      response.data.about,
      response.data.user
    );
    return result;
  }

  static async getProjects(
    id?: number
  ): Promise<ProfileInterface.ProfileProjectsInterface[]> {
    const response: AxiosResponse<
      ProfileServiceInterface.ProfileProjectsInterface[]
    > = await axios.get(
      `${BASE_API}/profile/${id}/project`,

      {
        headers: {
          authorization: localStorage.getItem("token"), // 헤더에 토큰 추가
        },
      }
    );
    // await axios.get(`${BASE_API}/profile/Projects${id}.json`);

    const result = response.data.map(
      (project) =>
        new Profile.ProfileProjectsImp(
          project.id,
          project.coverImage,
          project.title,
          project.description,
          project.startDate,
          project.endDate
        )
    );

    return result;
  }

  static async getExperience(
    id: number
  ): Promise<ProfileInterface.ProfileExperienceInterface[]> {
    const response: AxiosResponse<
      ProfileServiceInterface.ProfileExperienceInterface[]
    > = await axios.get(`${BASE_API}/profile/${id}/experience`, {
      headers: {
        authorization: localStorage.getItem("token"), // 헤더에 토큰 추가
      },
    });
    // await axios.get(`${BASE_API}/profile/Experience${id}.json`);

    const result = response.data.map(
      (experience) =>
        new Profile.ProfileExperienceImp(
          experience.imgSrc,
          experience.position,
          experience.startDate,
          experience.endDate,
          experience.description,
          experience.id,
          experience.experienceCompany
        )
    );

    return result;
  }

  static async getEducation(
    id: number
  ): Promise<ProfileInterface.ProfileEducationInterface[]> {
    const response: AxiosResponse<
      ProfileServiceInterface.ProfileEducationInterface[]
    > = await axios.get(`${BASE_API}/profile/${id}/education`, {
      headers: {
        authorization: localStorage.getItem("token"), // 헤더에 토큰 추가
      },
    });
    // await axios.get(`${BASE_API}/profile/Education${id}.json`);

    const result = response.data.map(
      (education) =>
        new Profile.ProfileEducationImp(
          education.id,
          education.course,
          education.description,
          education.startDate,
          education.endDate,
          education.educationInstitute
        )
    );

    return result;
  }

  static async putTitle(userInfo: any): Promise<any> {
    const response: AxiosResponse<any> = await axios.put(
      `${BASE_API}/profile/${localStorage.getItem("profileId")}`,
      {
        jobDescription: userInfo.jobDescription,
        location: userInfo.location,
        address: userInfo.address,
        profileBackImage: userInfo.profileBackImage,
        about: userInfo.about,
      },
      {
        headers: {
          authorization: localStorage.getItem("token"), // 헤더에 토큰 추가
        },
      }
    );
    return response;
  }

  static async makeProject(userInfo: any): Promise<any> {
    const response: AxiosResponse<any> = await axios.post(
      `${BASE_API}/profile/${localStorage.getItem("profileId")}/project`,
      {
        title: userInfo.title,
        description: userInfo.description,
        startDate: userInfo.startDate,
        endDate: userInfo.endDate,
        projectImages: [userInfo.image],
      },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    return response;
  }

  static async removeProject(id: number): Promise<any> {
    const response: AxiosResponse<any> = await axios.delete(
      `${BASE_API}/profile/${localStorage.getItem("profileId")}/project/${id}`,

      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );

    alert("삭제완료");
    return response;
  }

  static async updateProject(userInfo: any, id: number): Promise<any> {
    const response: AxiosResponse<any> = await axios.put(
      `${BASE_API}/profile/${localStorage.getItem("profileId")}/project/${id}`,
      {
        title: userInfo.title,
        description: userInfo.description,
        startDate: userInfo.startDate,
        endDate: userInfo.endDate,
        projectImages: [userInfo.image],
      },
      {
        headers: {
          authorization: localStorage.getItem("token"), // 헤더에 토큰 추가
        },
      }
    );
    return response;
  }

  ///////////////////////////////////////////

  static async makeExperience(userInfo: any): Promise<any> {
    const response: AxiosResponse<any> = await axios.post(
      `${BASE_API}/profile/${localStorage.getItem("profileId")}/experience`,
      {
        position: userInfo.position,
        description: userInfo.description,
        startDate: userInfo.startDate,
        endDate: userInfo.endDate,
        experienceCompany: {
          name: userInfo.companyName,
          logo: userInfo.logoUrl,
          location: userInfo.location,
        },
      },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    return response;
  }

  static async removeExperience(id: number): Promise<any> {
    const response: AxiosResponse<any> = await axios.delete(
      `${BASE_API}/profile/${localStorage.getItem(
        "profileId"
      )}/experience/${id}`,

      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );

    alert("삭제완료");
    return response;
  }

  static async updateExperience(userInfo: any, id: number): Promise<any> {
    console.log("체크", id);
    const response: AxiosResponse<any> = await axios.put(
      `${BASE_API}/profile/${localStorage.getItem(
        "profileId"
      )}/experience/${id}`,
      {
        position: userInfo.position,
        description: userInfo.description,
        startDate: userInfo.startDate,
        endDate: userInfo.endDate,
        experienceCompany: {
          name: userInfo.companyName,
          logo: userInfo.logoUrl,
          location: userInfo.location,
        },
      },
      {
        headers: {
          authorization: localStorage.getItem("token"), // 헤더에 토큰 추가
        },
      }
    );
    return response;
  }

  /////////////////////////////////////////////

  static async makeEducation(userInfo: any): Promise<any> {
    const response: AxiosResponse<any> = await axios.post(
      `${BASE_API}/profile/${localStorage.getItem("profileId")}/education`,
      {
        course: userInfo.course, // 학과, 전공 설명 입력
        description: userInfo.description, // 추가 정보
        startDate: userInfo.startDate,
        endDate: userInfo.endDate,
        educationInstitute: {
          name: userInfo.name,
          logo: userInfo.logoUrl,
        },
      },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    return response;
  }

  static async removeEducation(id: number): Promise<any> {
    const response: AxiosResponse<any> = await axios.delete(
      `${BASE_API}/profile/${localStorage.getItem(
        "profileId"
      )}/education/${id}`,

      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );

    alert("삭제완료");
    return response;
  }

  static async updateEducation(userInfo: any, id: number): Promise<any> {
    const response: AxiosResponse<any> = await axios.put(
      `${BASE_API}/profile/${localStorage.getItem(
        "profileId"
      )}/education/${id}`,
      {
        course: userInfo.course, // 학과, 전공 설명 입력
        description: userInfo.description, // 추가 정보
        startDate: userInfo.startDate,
        endDate: userInfo.endDate,
        educationInstitute: {
          name: userInfo.name,
          logo: userInfo.logoUrl,
        },
      },
      {
        headers: {
          authorization: localStorage.getItem("token"), // 헤더에 토큰 추가
        },
      }
    );
    return response;
  }
}
