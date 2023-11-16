"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import ProfileViewModel from "@/view-model/profile/class/ProfileViewModel";
import DetailsViewLayout from "@/view/components/DetailsViewLayout";
import { ProfileProjectsInterface } from "@/model/entity/profile/ProfileInterface";

const DetailsProjectsView = ({ id }: { id: number }) => {
  const [titleData, setTitleData] = useState<any | null>(null);
  const [projectsData, setProjectsData] = useState<any | null>(null);

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
  }, []);

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
        <ProfileBoxTitleBox>
          <ProfileBoxTitle>Projects</ProfileBoxTitle>
        </ProfileBoxTitleBox>
        <ProfileProjectsContent>
          {projectsData?.map((item: ProfileProjectsInterface) => (
            <ProfileProjectsCard>
              {myProfile && (
                <Edit
                  alt="수정 아이콘"
                  src="/images/blackpencil.png"
                  width={20}
                  height={20}
                  onClick={() => {
                    router.push(`/profile/${profileId}/details/projects`);
                  }}
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
                <ProfileProjectsTitle>P{item.title}</ProfileProjectsTitle>
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

const DetailsProjectViewStyle = styled.div``;

const ProfileBoxTitleBox = styled.div`
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

const Edit = styled(Image)`
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
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
const ProfilePictures = styled(Image)`
  display: block;
`;

export default DetailsProjectsView;
