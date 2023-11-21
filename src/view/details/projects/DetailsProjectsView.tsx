"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styled from "styled-components";
import ProfileViewModel from "@/view-model/profile/class/ProfileViewModel";
import DetailsViewLayout from "@/view/components/DetailsViewLayout";
import { ProfileProjectsInterface } from "@/model/entity/profile/ProfileInterface";
import ModalEdit from "@/view/components/ModalEdit";

const DetailsProjectsView = ({ id }: { id: number }) => {
  const router = useRouter();
  const [titleData, setTitleData] = useState<any | null>(null);
  const [projectsData, setProjectsData] = useState<any | null>(null);
  const [change, setChange] = useState<boolean>(false);

  const isChange = () => {
    setChange((prev) => !prev);
  };

  useEffect(() => {
    const fetchData = async (id: number) => {
      try {
        const getProfileData = await ProfileViewModel.getProfileTitleData(id);

        setTitleData(getProfileData);

        const getProjectsData = await ProfileViewModel.getProjectsData(id);

        setProjectsData(getProjectsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(id);
  }, [change]);

  if (titleData === null || projectsData === null) {
    return <div>Loading...</div>;
  }

  const userIdFromLocalStorage: number | null = parseInt(
    localStorage.getItem("userId") || "-1"
  );

  const myProfile: boolean = userIdFromLocalStorage === titleData.user.id;

  return (
    <DetailsProjectViewStyle>
      <DetailsViewLayout>
        <BackIcon
          alt="뒤로가기 아이콘"
          src="/images/arrow.png"
          width={20}
          height={20}
          onClick={() => {
            router.push(`/profile/${id}`);
          }}
        />

        {myProfile && (
          <ModalEdit
            deleteBtn={false}
            newBtn={true}
            title="프로젝트 생성"
            layout="projects_null"
            click={isChange}
          />
        )}

        <ProfileBoxTitleBox>
          <ProfileBoxTitle>Projects</ProfileBoxTitle>
        </ProfileBoxTitleBox>
        <ProfileProjectsContent>
          {projectsData?.map((item: ProfileProjectsInterface) => (
            <ProfileProjectsCard>
              {myProfile && (
                <ModalEdit
                  data={item}
                  newBtn={false}
                  deleteBtn={true}
                  title="프로젝트 수정"
                  layout="projects"
                  click={isChange}
                  id={item.id}
                />
              )}

              <ProfileProjectsPic
                alt="사진"
                key={item.coverImage.id}
                width={250}
                height={160}
                src={item.coverImage.image}
              />
              <ProfileProjectsInfoBox>
                <ProfileProjectsTitle>{item.title}</ProfileProjectsTitle>
                <ProfileProjectsDetail>
                  {item.description}

                  {item.startDate}
                </ProfileProjectsDetail>
              </ProfileProjectsInfoBox>
            </ProfileProjectsCard>
          ))}
        </ProfileProjectsContent>
      </DetailsViewLayout>
    </DetailsProjectViewStyle>
  );
};

const DetailsProjectViewStyle = styled.div`
  position: relative;
`;

const BackIcon = styled(Image)`
  flex-shrink: 0;
  display: block;
  cursor: pointer;
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

const ProfileBoxTitleBox = styled.div`
  margin-top: 30px;
  display: flex;
  margin-bottom: 25px;
  align-items: center;
`;

const ProfileBoxTitle = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ProfileProjectsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 25px;
`;

const ProfileProjectsCard = styled.div`
  display: flex;
  gap: 45px;
  position: relative;
`;

const ProfileProjectsPic = styled(Image)`
  flex-shrink: 0;
  display: block;
  object-fit: cover;
`;

const ProfileProjectsInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProfileProjectsTitle = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin-top: 15px;
  margin-bottom: 5px;
`;

const ProfileProjectsDetail = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 15px */
`;

export default DetailsProjectsView;

const FIELD_DATA = [
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
