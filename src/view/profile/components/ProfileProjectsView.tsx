"use Client";

import styled from "styled-components";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { ProfileProjectsInterface } from "@/model/entity/profile/ProfileInterface";
import Modal from "@/view/components/ModalEdit";

const ProfileProjectsView: React.FC<{
  data: ProfileProjectsInterface[];
  myProfile: boolean;
  profileId: number;
}> = ({ data, myProfile, profileId }) => {
  const router = useRouter();
  const selectedData = data.slice(0, 3);
  const [modalCheck, setModalCheck] = useState<boolean>(false);

  const clickModal = (value: boolean) => {
    setModalCheck(value);
    if (value === false) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <ProfileProjectsViewStyle>
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
      <ProfileBoxTitleBox>
        <ProfileBoxTitle>Projects</ProfileBoxTitle>
        <ProfileProjectsNumber>
          {data.length >= 3 ? 3 : data.length} of {data.length}{" "}
        </ProfileProjectsNumber>
      </ProfileBoxTitleBox>
      <ProfileProjectsContent>
        {selectedData?.map((item: ProfileProjectsInterface) => (
          <ProfileProjectsCard>
            <ProfileProjectsPic
              alt="사진"
              key={item.coverImage.id}
              width={250}
              height={160}
              src={item.coverImage.image}
            />
            <ProfileProjectsTitle>P{item.title}</ProfileProjectsTitle>
            <ProfileProjectsDetail>
              {item.title} {item.startDate}
            </ProfileProjectsDetail>
          </ProfileProjectsCard>
        ))}
      </ProfileProjectsContent>
      <ProfileMore>show all ({data.length})</ProfileMore>
    </ProfileProjectsViewStyle>
  );
};

const ProfileProjectsViewStyle = styled.div``;

const Edit = styled(Image)`
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
`;

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

const ProfileProjectsPic = styled(Image)`
  flex-shrink: 0;
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
