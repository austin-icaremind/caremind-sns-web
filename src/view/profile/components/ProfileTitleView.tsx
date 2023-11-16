"use Client";

import styled from "styled-components";
import { useState } from "react";
import ModalEdit from "@/view/components/ModalEdit";

function getFieldValue(obj: any, field: string) {
  const fields = field.split(".");
  let value = obj;

  for (const f of fields) {
    value = value[f];
  }
  return value;
}

const ProfileTitleView: React.FC<{ data: any; myProfile: boolean }> = ({
  data,
  myProfile,
}) => {
  interface accountCheck {
    pic: string;
    title: string;
    info: string;
    startDate: string;
    endDate: string;
  }

  const [userInfo, setUserInfo] = useState<accountCheck>({
    pic: "",
    title: "",
    info: "",
    startDate: "",
    endDate: "",
  });

  const handleUserInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <ProfileTitleStyle>
      <ProfileTitleWrapper>
        {myProfile && (
          <ModalPosition>
            <ModalEdit deleteBtn={false} newBtn={false} title="프로필 수정">
              <>
                {FIELD_DATA.map(({ name, type, placeholder, label }) => (
                  <InputBox key={name}>
                    <Title>{label}</Title>
                    <InputStyle
                      value={getFieldValue(data, name)}
                      name={name}
                      type={type}
                      placeholder={placeholder}
                      onChange={handleUserInfo}
                    />
                  </InputBox>
                ))}
              </>
            </ModalEdit>
          </ModalPosition>
        )}

        {/* {myProfile && (
          <IconWrapper>
            <UpLoadContainer>
              <UpLoadImage
                alt="업로드 아이콘"
                src="/images/upload.png"
              ></UpLoadImage>
            </UpLoadContainer>
            <RightIcon>
              <EditContainer
                onClick={() => {
                  clickModal(true);
                }}
              >
                <EditImage alt="편집 아이콘" src="/images/edit.png"></EditImage>
                <EditLetter>EDIT PROFILE</EditLetter>
              </EditContainer>
              <HamburgerContainer>
                <HamburgerImage
                  alt="옵션 아이콘"
                  src="/images/more-horizontal.png"
                ></HamburgerImage>
              </HamburgerContainer>
            </RightIcon>
          </IconWrapper>

        )} */}
        <BackGroundImageWrapper
          imgSrc={data.profileBackImage}
        ></BackGroundImageWrapper>
        <InformationWrapper>
          <ProfileImageWrapper>
            <ProfileImage
              alt="프로필 이미지"
              src={data.user.profileImage}
            ></ProfileImage>
          </ProfileImageWrapper>
          <AboutMeWrapper>
            <NameAndLocationWrapper>
              <NameLetter>{data.user.name}</NameLetter>
              <LocationWrapper>
                <LocationImage
                  alt="화살표이미지"
                  src="/images/navigation.png"
                ></LocationImage>
                <LocationLetter>
                  {data.location} {data.address}
                </LocationLetter>
              </LocationWrapper>
            </NameAndLocationWrapper>
            <JobExplanitionWrapper>{data.jobDescription}</JobExplanitionWrapper>
            <ButtonWrapper>
              <LeftButton>CONTACT INFO</LeftButton>
              <RightButton>{data.connections} CONNECTIONS</RightButton>
            </ButtonWrapper>
          </AboutMeWrapper>
        </InformationWrapper>
      </ProfileTitleWrapper>
      <ProfileUpperInfo>PROFILE</ProfileUpperInfo>
      <ProfileUpperInfoEmptySpace />
      <ProfileTotalBox>
        <ProfileBox>
          <ProfileBoxInside>
            <ProfileBoxTitle>About</ProfileBoxTitle>
            <ProfileAboutContent>{data.about}</ProfileAboutContent>
            <ProfileMore>see more</ProfileMore>
          </ProfileBoxInside>
        </ProfileBox>
      </ProfileTotalBox>
    </ProfileTitleStyle>
  );
};

const ProfileTitleStyle = styled.div``;

const ProfileTitleWrapper = styled.div`
  width: 850px;
  height: 360px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 20px 60px 0px rgba(241, 244, 248, 0.5);
  margin-bottom: 21px;
  position: relative;
`;

const ModalPosition = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
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
const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
`;

const IconContainerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 10px 30px 0px rgba(113, 123, 133, 0.05);
  height: 36px;
  width: 36px;
  cursor: pointer;
`;
const UpLoadContainer = styled(IconContainerStyle)`
  position: absolute;
  left: 25px;
`;

const UpLoadImage = styled.img`
  width: 16px;
  height: 16px;
`;

const RightIcon = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  position: absolute;
  right: 25px;
`;

const EditContainer = styled(IconContainerStyle)`
  display: flex;
  justify-content: space-evenly;
  width: 132px;
`;
const EditImage = styled.img`
  width: 16px;
  height: 16px;
`;

const EditLetter = styled.p`
  color: #181818;
  text-align: center;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`;

const HamburgerContainer = styled(IconContainerStyle)``;
const HamburgerImage = styled.img`
  width: 24px;
  height: 24px;
`;

const BackGroundImageWrapper = styled.div<{ imgSrc: string }>`
  display: block;
  width: 100%;
  height: 50%;
  background-image: ${(props) =>
    props.imgSrc ? `url(${props.imgSrc})` : null};
`;

const InformationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 50%;
`;

const ProfileImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 25px;
  width: 170px;
  height: 170px;
  background-color: white;
  border-radius: 50%;
  margin-top: -30px;
`;

const ProfileImage = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
`;
const AboutMeWrapper = styled.div`
  width: 620px;
  height: 100%;
`;

const NameAndLocationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 15px;
`;

const NameLetter = styled.p`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 30px;
`;

const LocationImage = styled.img`
  width: 16px;
  height: 16px;
`;

const LocationLetter = styled.p`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

const JobExplanitionWrapper = styled.div`
  display: inline-block;
  margin-right: 40px;
  color: #181818;
  font-family: Gotham Pro;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 14px;
`;

const Button = styled.button`
  width: 170px;
  height: 32px;
  border-radius: 4px;
  cursor: pointer;
`;

const LeftButton = styled(Button)`
  background: linear-gradient(180deg, #0077b5 0%, #0e6795 100%);
  color: white;
  border: none;
  text-align: center;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;
const RightButton = styled(Button)`
  background-color: white;
  color: #0275b1;
  text-align: center;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  border: 1px solid #0275b1;
`;

const ProfileUpperInfo = styled.div`
  width: 240px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 4px 4px 0px 0px;
  background: linear-gradient(180deg, #0077b5 0%, #0e6795 100%);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;

const ProfileUpperInfoEmptySpace = styled.div`
  width: 850px;
  height: 30px;
  flex-shrink: 0;
  background: linear-gradient(
    180deg,
    rgba(241, 244, 248, 0.8) 0%,
    rgba(241, 244, 248, 0) 100%
  );
  border-top: 1px solid rgb(241, 241, 241);
`;

const ProfileTotalBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`;

const ProfileBox = styled.div`
  width: 850px;
  flex-shrink: 0;
  background-color: white;
`;

const ProfileBoxInside = styled.div`
  padding: 30px;
`;

const ProfileBoxTitle = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 15px;
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
  width: 70px;
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

export default ProfileTitleView;

const FIELD_DATA = [
  {
    label: "이름",
    type: "text",
    name: "user.name",
    placeholder: "이름을 입력해주세요",
    description: "이름을 입력해주세요",
    alt: "필수입력사항",
  },
  {
    label: "직무",
    type: "text",
    name: "jobDescription",
    placeholder: "직무를 간단하게 설명 해주세요",
    description: "직무입력란",
    alt: "필수입력사항",
  },
  {
    label: "도시",
    type: "text",
    name: "location",
    placeholder: "도시명을 써 주세요.",
    alt: "필수입력사항",
  },
  {
    label: "상세 주소",
    type: "text",
    name: "address",
    placeholder: "예) 동작구 49길",
    alt: "필수입력사항",
  },
  {
    label: "프로필 URL",
    type: "text",
    name: "user.profileImage",
    placeholder: "프로필 URL을 입력해주세요.",
    alt: "필수입력사항",
  },

  {
    label: "프로필 배경 URL",
    type: "text",
    name: "profileBackImage",
    placeholder: "프로필 배경 URL을 입력해주세요.",
    alt: "필수입력사항",
  },
];
