import React from "react";
import styled from "styled-components";

const ProfileVisitorsView = () => {
  return (
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
  );
};

const BoardTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgb(241, 241, 241);
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

const BoardTitle = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
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

export default ProfileVisitorsView;
