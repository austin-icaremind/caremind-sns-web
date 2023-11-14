"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import ProfileTitleView from "./components/ProfileTitleView";
import ProfileEducationView from "./components/ProfileEducationView";
import ProfileExperienceView from "./components/ProfileExperienceView";
import ProfileViewModel from "@/view-model/profile/class/ProfileViewModel";
import ProfileProjectsView from "./components/ProfileProjectsView";
import Image from "next/image";

const ProfileView = ({ id }: { id: number }) => {
  const [titleData, setTitleData] = useState<any | null>(null);
  const [projectsData, setProjectsData] = useState<any | null>(null);
  const [experienceData, setExperienceData] = useState<any | null>(null);
  const [educationData, setEducationData] = useState<any | null>(null);
  const [modalCheck, setModalCheck] = useState<any | null>("close");

  useEffect(() => {
    const fetchData = async (id: number) => {
      try {
        const getProfileData = await ProfileViewModel.getProfileTitleData(id);

        setTitleData(getProfileData);

        const getProjectsData = await ProfileViewModel.getProjectsData(id);

        setProjectsData(getProjectsData);

        const getExperienceData = await ProfileViewModel.getProfileExperience(
          id
        );

        setExperienceData(getExperienceData);

        const getEducationData = await ProfileViewModel.getProfileEducation(id);
        setEducationData(getEducationData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(id);
  }, []);

  if (
    titleData === null ||
    projectsData === null ||
    experienceData == null ||
    educationData == null
  ) {
    return <div>Loading...</div>;
  }

  const userIdFromLocalStorage = localStorage.getItem("userId");
  const userId = userIdFromLocalStorage
    ? parseInt(userIdFromLocalStorage, 10)
    : -1;
  const myProfileCheck: boolean = userId === titleData.user.id;
  const clickModal = (value: string) => {
    setModalCheck(value);
    if (value === "close") {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };
  console.log("테스트", modalCheck);
  return (
    <ProfileStyleBox>
      <ModalBox active={modalCheck}>
        <ModalBlack />
        <ModalInfo
          onClick={() => {
            clickModal("close");
          }}
        ></ModalInfo>
      </ModalBox>

      <ProfileStyle>
        <ProfileLeft>
          <ProfileOutSideBox>
            <ProfileTitleView
              data={titleData}
              click={clickModal}
              state={modalCheck}
            />
            {myProfileCheck && (
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
                      clickModal("profile");
                    }}
                  >
                    <EditImage
                      alt="편집 아이콘"
                      src="/images/edit.png"
                    ></EditImage>
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
            )}
          </ProfileOutSideBox>

          <ProfileTotalBox>
            <ProfileBox>
              <ProfileBoxInside>
                <ProfileOutSideBox>
                  <ProfileProjectsView data={projectsData} />
                  {myProfileCheck && (
                    <Edit
                      alt="수정 아이콘"
                      src="/images/blackpencil.png"
                      width={20}
                      height={20}
                      onClick={() => {
                        clickModal("projects");
                      }}
                    />
                  )}
                </ProfileOutSideBox>
              </ProfileBoxInside>
            </ProfileBox>
            <ProfileCareerStyle>
              <ProfileCareerWrap>
                <ProfileOutSideBox>
                  <CareerCategory>Experience</CareerCategory>
                  <ProfileExperienceView data={experienceData} />
                  {myProfileCheck && (
                    <Edit
                      alt="수정 아이콘"
                      src="/images/blackpencil.png"
                      width={20}
                      height={20}
                      onClick={() => {
                        clickModal("experience");
                      }}
                    />
                  )}
                </ProfileOutSideBox>
              </ProfileCareerWrap>
            </ProfileCareerStyle>
            <ProfileCareerStyle>
              <ProfileCareerWrap>
                <ProfileOutSideBox>
                  <CareerCategory>Education</CareerCategory>
                  <ProfileEducationView data={educationData} />
                  {myProfileCheck && (
                    <Edit
                      alt="수정 아이콘"
                      src="/images/blackpencil.png"
                      width={20}
                      height={20}
                      onClick={() => {
                        clickModal("education");
                      }}
                    />
                  )}
                </ProfileOutSideBox>
              </ProfileCareerWrap>
            </ProfileCareerStyle>
          </ProfileTotalBox>
        </ProfileLeft>
        <ProfileRight>
          <ProfileBoard>
            <ProfileBoardInside>
              <BoardTitleBox>
                <BoardTitle>your dashboard</BoardTitle>
                <BoardClick>go to stats</BoardClick>
              </BoardTitleBox>
              <DashBoardContentBox>
                <DashBoardContent>
                  <DashBoardNumber>367</DashBoardNumber>
                  <DashBoardInfo>views today</DashBoardInfo>
                </DashBoardContent>
                <DashBoardContent>
                  <DashBoardNumber>15</DashBoardNumber>
                  <DashBoardInfo>posts views</DashBoardInfo>
                </DashBoardContent>
                <DashBoardContent>
                  <DashBoardNumber>9</DashBoardNumber>
                  <DashBoardInfo>search appearances</DashBoardInfo>
                </DashBoardContent>
              </DashBoardContentBox>
            </ProfileBoardInside>
          </ProfileBoard>

          <ProfileBoard>
            <ProfileBoardInside>
              <BoardTitleBox>
                <BoardTitle>visitors</BoardTitle>
                <BoardClick>view all</BoardClick>
              </BoardTitleBox>
              <VisitorsBoardContentBox>
                <VisitorsBoardContent>
                  <VisitorsBoardPic />
                  <VisitorsBoardDetailBox>
                    <VisitorsBoardName>Darlene Black</VisitorsBoardName>
                    <VisitorsBoardRole>HR-manager</VisitorsBoardRole>
                  </VisitorsBoardDetailBox>
                </VisitorsBoardContent>
                <VisitorsBoardContent>
                  <VisitorsBoardPic />
                  <VisitorsBoardDetailBox>
                    <VisitorsBoardName>Theresa Steward</VisitorsBoardName>
                    <VisitorsBoardRole>iOS developer</VisitorsBoardRole>
                  </VisitorsBoardDetailBox>
                </VisitorsBoardContent>
                <VisitorsBoardContent>
                  <VisitorsBoardPic />
                  <VisitorsBoardDetailBox>
                    <VisitorsBoardName>Brandom Wilson</VisitorsBoardName>
                    <VisitorsBoardRole>Senior UX designer</VisitorsBoardRole>
                  </VisitorsBoardDetailBox>
                </VisitorsBoardContent>
                <VisitorsBoardContent>
                  <VisitorsBoardPic />
                  <VisitorsBoardDetailBox>
                    <VisitorsBoardName>Kyle Fish</VisitorsBoardName>
                    <VisitorsBoardRole>Product designer</VisitorsBoardRole>
                  </VisitorsBoardDetailBox>
                </VisitorsBoardContent>
                <VisitorsBoardContent>
                  <VisitorsBoardPic />
                  <VisitorsBoardDetailBox>
                    <VisitorsBoardName>Audrey Alexander</VisitorsBoardName>
                    <VisitorsBoardRole>Team lead at Google</VisitorsBoardRole>
                  </VisitorsBoardDetailBox>
                </VisitorsBoardContent>
              </VisitorsBoardContentBox>
            </ProfileBoardInside>
          </ProfileBoard>
        </ProfileRight>
      </ProfileStyle>
    </ProfileStyleBox>
  );
};

const ProfileStyleBox = styled.div``;

interface ModalBoxProps {
  active: string;
}

const ModalBox = styled.div<ModalBoxProps>`
  display: ${(props) => (props.active !== "close" ? "block" : "none")};
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
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 11;
`;

const ProfileStyle = styled.div`
  padding-top: 40px;
  padding-bottom: 280px;
  display: flex;
  gap: 40px;
`;

const ProfileLeft = styled.div``;

const ProfileRight = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px 0 0 0;
  position: absolute;
  top: 0;
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

const ProfileOutSideBox = styled.div`
  position: relative;
`;

const Edit = styled(Image)`
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
`;

const ProfileTotalBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProfileBox = styled.div`
  width: 850px;
  flex-shrink: 0;
  background-color: white;
`;

const ProfileBoxInside = styled.div`
  padding: 30px;
  background-color: white;
`;

const ProfileCareerStyle = styled.div`
  width: 850px;
  flex-shrink: 0;
  background-color: white;
`;

const ProfileCareerWrap = styled.div`
  padding: 30px 30px 0px 30px;
`;

const CareerCategory = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 8px;
`;

const ProfileBoard = styled.div`
  width: 290px;
  flex-shrink: 0;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 20px 60px 0px rgba(241, 244, 248, 0.5);
`;

const ProfileBoardInside = styled.div`
  padding: 25px 30px 30px 30px;
`;

const BoardTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgb(241, 241, 241);
`;

const BoardTitle = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;

const BoardClick = styled.div`
  color: #0275b1;
  text-align: right;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
  text-transform: uppercase;
  cursor: pointer;
`;

const DashBoardContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DashBoardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const DashBoardNumber = styled.div`
  color: #0275b1;
  font-family: Gotham Pro;
  font-size: 52px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;

const DashBoardInfo = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
`;

const VisitorsBoardContentBox = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const VisitorsBoardContent = styled.div`
  display: flex;
  align-items: center;
`;

const VisitorsBoardPic = styled.div`
  width: 52px;
  height: 52px;
  flex-shrink: 0;
  border-radius: 26px;
  background-color: orange;
  margin-right: 15px;
`;

const VisitorsBoardDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const VisitorsBoardName = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const VisitorsBoardRole = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 15px */
`;

export default ProfileView;
