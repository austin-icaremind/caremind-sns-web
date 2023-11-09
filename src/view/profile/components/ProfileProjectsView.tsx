"use Client";

import styled from "styled-components";

import { ProfileProjectsData } from "@/model/service/interface/ProfileServiceInterface";
import Image from "next/image";
import Profile from "@/app/profile/[id]/page";

const ProfileProjectsView: React.FC<{ data: ProfileProjectsData }> = ({
  data,
}) => {
  return (
    <ProfileProjectsViewStyle>
      <ProfileBoxTitleBox>
        <ProfileBoxTitle>Projects</ProfileBoxTitle>
        <ProfileProjectsNumber>3 of 12</ProfileProjectsNumber>
      </ProfileBoxTitleBox>
      <ProfileProjectsContent>
        <ProfileProjectsCard>
          <ProfileProjectsPic />
          <ProfileProjectsTitle>Zara redesign concenpt</ProfileProjectsTitle>
          <ProfileProjectsDetail>
            UX/UI design, 15.07.2019
          </ProfileProjectsDetail>
        </ProfileProjectsCard>
        <ProfileProjectsCard>
          <ProfileProjectsPic />
          <ProfileProjectsTitle>Zara redesign concenpt</ProfileProjectsTitle>
          <ProfileProjectsDetail>
            UX/UI design, 15.07.2019
          </ProfileProjectsDetail>
        </ProfileProjectsCard>
        <ProfileProjectsCard>
          <ProfileProjectsPic />
          <ProfileProjectsTitle>Zara redesign concenpt</ProfileProjectsTitle>
          <ProfileProjectsDetail>
            UX/UI design, 15.07.2019
          </ProfileProjectsDetail>
        </ProfileProjectsCard>
      </ProfileProjectsContent>
      <ProfileMore>show all (12)</ProfileMore>
    </ProfileProjectsViewStyle>
  );
};

const ProfileProjectsViewStyle = styled.div``;

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

const ProfileProjectsNumber = styled.div`
  margin-left: 15px;
  color: #747474;
  font-family: Gotham Pro;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ProfileAboutContent = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  margin-bottom: 20px;
`;

const ProfileMore = styled.div`
  color: #0275b1;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  margin-bottom: 5px;
  cursor: pointer;
`;

const ProfileProjectsContent = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 25px;
`;

const ProfileProjectsCard = styled.div``;

const ProfileProjectsPic = styled.div`
  width: 250px;
  height: 160px;
  flex-shrink: 0;
  background-color: orange;
  display: block;
  margin-bottom: 15px;
`;

const ProfileProjectsTitle = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
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

export default ProfileProjectsView;
