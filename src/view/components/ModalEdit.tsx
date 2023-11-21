"use client";

import styled from "styled-components";
import Image from "next/image";
import { useState, useEffect } from "react";
import ProfileViewModel from "@/view-model/profile/class/ProfileViewModel";

interface ModalProps {
  newBtn: boolean;
  deleteBtn: boolean;
  title: string;
  data?: any;
  layout: string;
  click?: any;
  id?: number;
}

const ModalEdit: React.FC<ModalProps> = ({
  newBtn,
  deleteBtn,
  title,
  data,
  layout,
  click,
  id,
}) => {
  const [modalCheck, setModalCheck] = useState<boolean>(false);

  const clickModal = (value: boolean) => {
    setModalCheck(value);
    if (value === false) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  const item = (() => {
    if (layout === "title") {
      return TITLE_MODAL_LAYOUT;
    } else if (layout === "title_null") {
      return TITLE_MODAL_LAYOUT;
    } else if (layout === "projects") {
      return PROJECTS_MODAL_LAYOUT;
    } else if (layout === "projects_null") {
      return PROJECTS_MODAL_LAYOUT;
    } else if (layout === "experience") {
      return EXPERIENCE_MODAL_LAYOUT;
    } else if (layout === "experience_null") {
      return EXPERIENCE_MODAL_LAYOUT;
    } else if (layout === "education") {
      return EDUCATION_MODAL_LAYOUT;
    } else if (layout === "education_null") {
      return EDUCATION_MODAL_LAYOUT;
    }
  })();

  const getFieldValue = (obj: any, field: string) => {
    const fields = field.split(".");
    let value = obj;

    for (const f of fields) {
      value = value[f];
    }
    return value;
  };

  const handleUserInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  let userInfoInitialState;

  switch (layout) {
    case "title":
      userInfoInitialState = {
        jobDescription: data.jobDescription,
        location: data.location,
        address: data.address,
        profileBackImage: data.profileBackImage,
        about: data.about,
      };
      break;
    case "title_null":
      userInfoInitialState = {
        jobDescription: "",
        location: "",
        address: "",
        profileBackImage: "",
        about: "",
      };
      break;
    case "projects":
      userInfoInitialState = {
        image: data?.coverImage?.image,
        title: data?.title,
        description: data?.description,
        startDate: data?.startDate,
        endDate: data?.endDate,
      };
      break;
    case "projects_null":
      userInfoInitialState = {
        image: "",
        title: "",
        description: "",
        startDate: "",
        endDate: "",
      };
      break;
    case "experience":
      userInfoInitialState = {
        position: data?.position,
        companyName: data?.experienceCompany?.name,
        location: data?.experienceCompany?.location,
        logoUrl: data?.experienceCompany?.logo,
        startDate: data?.startDate,
        endDate: data?.endDate,
        description: data?.description,
      };
      break;
    case "experience":
      userInfoInitialState = {
        position: "",
        companyName: "",
        location: "",
        logoUrl: "",
        startDate: "",
        endDate: "",
        description: "",
      };
      break;
    case "education":
      userInfoInitialState = {
        name: data?.educationInstitute?.name,
        description: data?.description,
        logoUrl: data?.educationInstitute?.logo,
        course: data?.course,
        startDate: data?.startDate,
        endDate: data?.endDate,
      };
      break;
    case "education":
      userInfoInitialState = {
        name: "",
        description: "",
        logoUrl: "",
        course: "",
        startDate: "",
        endDate: "",
      };
      break;
    default:
      userInfoInitialState = {};
      break;
  }

  const [userInfo, setUserInfo] = useState(userInfoInitialState);
  const profileId = localStorage.getItem("profileId");
  const handleRemoveClick = async () => {
    try {
      if (profileId) {
        await ProfileViewModel.removeProject(userInfo, id);
      } else {
        console.error("프로필 ID를 찾을 수 없습니다");
      }
    } catch (error) {
      console.error("저장 중 오류 발생:", error);
    }
    clickModal(false);
    click();
  };

  const handleMakeClick = async () => {
    try {
      if (profileId) {
        await ProfileViewModel.makeProject(userInfo);
      } else {
      }
    } catch (error) {
      console.error("오류 발생:", error);
    }
    clickModal(false);
    click();
  };

  const handleUpdateClick = async () => {
    try {
      if (profileId) {
        await ProfileViewModel.updateProject(userInfo, id);
      } else {
        console.error("프로필 ID를 찾을 수 없습니다");
      }
    } catch (error) {
      console.error("저장 중 오류 발생:", error);
    }
    clickModal(false);
    click();
  };

  const nullLayouts = [
    "title_null",
    "projects_null",
    "experience_null",
    "education_null",
  ];

  console.log(userInfo);

  return (
    <ModalEditStyle>
      <ModalBox active={modalCheck}>
        <ModalBlack />
        <ModalInfo>
          <ModalExit
            alt="종료 아이콘"
            src="/images/exit.png"
            width={40}
            height={40}
            onClick={() => {
              clickModal(false);
            }}
          />
          <ModalTitle>{title}</ModalTitle>
          <ModalMiddle>
            <>
              {item?.map(({ name, key, type, placeholder, label }) => (
                <InputBox key={name}>
                  <Title>{label}</Title>
                  <InputStyle
                    defaultValue={
                      nullLayouts.includes(layout)
                        ? ""
                        : getFieldValue(data, key)
                    }
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    onChange={(e) => {
                      handleUserInfo(e);
                    }}
                  />
                </InputBox>
              ))}
            </>
          </ModalMiddle>
          <ModalFooter>
            <ModalDeleteBtn
              active={deleteBtn}
              onClick={() => {
                handleRemoveClick();
              }}
            >
              삭제
            </ModalDeleteBtn>
            <ModalSaveBtn
              onClick={() => {
                if (newBtn === true) {
                  handleMakeClick();
                } else if (newBtn === false) {
                  handleUpdateClick();
                }
              }}
            >
              저장
            </ModalSaveBtn>
          </ModalFooter>
        </ModalInfo>
      </ModalBox>
      <Edit
        alt="수정 아이콘"
        src={`/images/${newBtn === true ? "plus" : "blackpencil"}.png`}
        width={20}
        height={20}
        onClick={() => {
          clickModal(true);
        }}
      />
    </ModalEditStyle>
  );
};

export default ModalEdit;

const ModalEditStyle = styled.div``;

interface ModalBoxProps {
  active: boolean;
}

const ModalBox = styled.div<ModalBoxProps>`
  display: ${(props) => (props.active === true ? "block" : "none")};
`;

const ModalBlack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const ModalInfo = styled.div`
  border-radius: 6px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 744px;
  height: calc(100vh - 96px);
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 11;
  display: flex;
  flex-direction: column;
`;

const ModalExit = styled(Image)`
  position: absolute;
  top: 13px;
  right: 13px;
  cursor: pointer;
`;

const ModalTitle = styled.div`
  padding: 0 48px 0 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 22px;
  font-family: Gotham Pro;
  font-weight: 700;
  height: 65px;
  display: flex;
  align-items: center;
`;

const InputBox = styled.div``;

const Title = styled.div`
  font-size: 16px;
  margin-bottom: 15px;
`;

const InputStyle = styled.input`
  width: 500px;
  height: 30px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  padding: 10px 16px 10px 16px;
  font-size: 16px;
  margin-bottom: 20px;
  &::placeholder {
    color: #e0e0e0;
  }
`;

const ModalMiddle = styled.div`
  padding: 50px 100px 70px 100px;
  overflow-y: auto;
`;

const ModalFooter = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  height: 65px;
  display: flex;
  align-items: center;
  border-radius: 0 0 6px 6px;
  background-color: white;
`;

interface ModalDeleteBtnProps {
  active: boolean;
}

const ModalDeleteBtn = styled.div<ModalDeleteBtnProps>`
  left: 30px;
  top: 13px;
  width: 55px;
  color: red;
  padding: 10px 7px 10px 7px;
  text-align: center;
  font-family: Gotham Pro;
  font-weight: 700;
  border-radius: 18px;
  position: absolute;
  cursor: pointer;
  display: ${(props) => (props.active === true ? "block" : "none")};
`;

const ModalSaveBtn = styled.div`
  right: 20px;
  top: 13px;
  width: 55px;
  color: white;
  padding: 10px 7px 10px 7px;
  text-align: center;
  font-family: Gotham Pro;
  font-weight: 700;
  border-radius: 18px;
  background-color: blue;
  position: absolute;
  cursor: pointer;
`;

const Edit = styled(Image)`
  position: absolute;
  right: 25px;
  top: 25px;
  cursor: pointer;
`;

const TITLE_MODAL_LAYOUT = [
  {
    label: "직무",
    type: "text",
    name: "jobDescription",
    key: "jobDescription",
    placeholder: "직무를 간단하게 설명 해주세요",
    description: "직무입력란",
    alt: "필수입력사항",
  },
  {
    label: "도시",
    type: "text",
    name: "location",
    key: "location",
    placeholder: "도시명을 써 주세요.",
    alt: "필수입력사항",
  },
  {
    label: "상세 주소",
    type: "text",
    name: "address",
    key: "address",
    placeholder: "예) 동작구 49길",
    alt: "필수입력사항",
  },

  {
    label: "프로필 배경 URL",
    type: "text",
    name: "profileBackImage",
    key: "profileBackImage",
    placeholder: "프로필 배경 URL을 입력해주세요.",
    alt: "필수입력사항",
  },
  {
    label: "자기소개",
    type: "text",
    name: "about",
    key: "about",
    placeholder: "자기소개를 입력해주세요.",
    alt: "필수입력사항",
  },
];

const PROJECTS_MODAL_LAYOUT = [
  {
    label: "사진",
    type: "text",
    name: "image",
    key: "coverImage.image",
    placeholder: "사진 URL을 입력해주세요",
    description: "사진 URL을 입력해주세요",
    alt: "필수입력사항",
  },
  {
    label: "프로젝트 이름",
    type: "text",
    name: "title",
    key: "title",
    placeholder: "프로젝트 이름을 입력해주세요",
    description: "프로젝트 이름을 입력해주세요",
    alt: "필수입력사항",
  },
  {
    label: "설명",
    type: "text",
    name: "description",
    key: "description",
    placeholder: "설명을 써 주세요.",
    alt: "필수입력사항",
  },
  {
    label: "시작일 (예시 : 2023-11-16)",
    type: "text",
    name: "startDate",
    key: "startDate",
    placeholder: "2023-11-16 양식으로 해주세요",
    alt: "필수입력사항",
  },
  {
    label: "종료일 (예시 : 2023-11-17)",
    type: "text",
    name: "endDate",
    key: "endDate",
    placeholder: "진행중이라면 비워주셔도 됩니다.",
    alt: "필수입력사항",
  },
];

const EXPERIENCE_MODAL_LAYOUT = [
  {
    label: "직무",
    type: "text",
    name: "position",
    key: "position",
    placeholder: "직무를 입력해주세요",
    description: "직무를 입력해주세요",
    alt: "필수입력사항",
  },
  {
    label: "회사명",
    type: "text",
    name: "companyName",
    key: "experienceCompany.name",
    placeholder: "회사명을 입력해주세요",
    description: "회사명을 입력해주세요",
    alt: "필수입력사항",
  },
  {
    label: "회사 위치",
    type: "text",
    name: "location",
    key: "experienceCompany.location",
    placeholder: "회사 위치를 입력해주세요.",
    description: "회사 위치를 입력해주세요.",
    alt: "필수입력사항",
  },
  {
    label: "회사로고 URL",
    type: "text",
    name: "logoUrl",
    key: "experienceCompany.logo",
    placeholder: "회사로고 URL을 입력해주세요.",
    description: "회사로고 URL을 입력해주세요.",
    alt: "필수입력사항",
  },
  {
    label: "시작일 (예시 : 2023-11-16)",
    type: "text",
    name: "startDate",
    key: "startDate",
    placeholder: "2023-11-16 양식으로 해주세요",
    alt: "필수입력사항",
  },
  {
    label: "종료일 (예시 : 2023-11-17)",
    type: "text",
    name: "endDate",
    key: "endDate",
    placeholder: "재직중이라면 비워주셔도 됩니다.",
    alt: "필수입력사항",
  },
  {
    label: "설명",
    type: "text",
    name: "description",
    key: "description",
    placeholder: "설명을 써주세요.",
    alt: "필수입력사항",
  },
];

const EDUCATION_MODAL_LAYOUT = [
  {
    label: "교육기관명",
    type: "text",
    name: "name",
    key: "educationInstitute.name",
    placeholder: "교육기관을 입력해주세요",
    alt: "필수입력사항",
  },
  {
    label: "세부사항 (예시 : 경영학부)",
    type: "text",
    name: "description",
    key: "description",
    placeholder: "세부사항 입력해주세요",
    alt: "필수입력사항",
  },
  {
    label: "교육기관 로고 URL",
    type: "text",
    name: "logoUrl",
    key: "educationInstitute.logo",
    placeholder: "교육기관 로고 URL을 입력해주세요.",
    alt: "필수입력사항",
  },
  {
    label: "세부 코스 (예시 : 회계직렬을 집중적으로 수료했습니다.)",
    type: "text",
    name: "course",
    key: "course",
    placeholder: "세부 코스를 입력해주세요.",
    description: "회사로고 URL을 입력해주세요.",
    alt: "필수입력사항",
  },
  {
    label: "시작일 (예시 : 2023-11-16)",
    type: "text",
    name: "startDate",
    key: "startDate",
    placeholder: "2023-11-16 양식으로 해주세요",
    alt: "필수입력사항",
  },
  {
    label: "종료일 (예시 : 2023-11-17)",
    type: "text",
    name: "endDate",
    key: "endDate",
    placeholder: "재직중이라면 비워주셔도 됩니다.",
    alt: "필수입력사항",
  },
];

interface accountCheck {
  name: string;
  jobDescription: string;
  location: string;
  address: string;
  profileImage: string;
  profileBackImage: string;
}
