"use client";

import styled from "styled-components";
import NetworkNewConnectionUserItem from "./NetworkNewConnectionUserItem";

const NetworkRecievedView = () => {
  type FeedData = {
    // 나중에 키값 백엔드랑 맞추기//
    id: number;
    profileImageSrc: string;
    userName: string;
    userJob: string;
    connection: number;
    explanation: string;
  };

  const UserData: FeedData[] = [
    {
      id: 1,
      profileImageSrc: "/images/thumbs-up.png",
      userName: "Theresa Steward",
      userJob: "iOS developer",
      connection: 132,
      explanation:
        "Hey, I saw your works. I like it! Can we do something together? Or,",
    },
    {
      id: 2,
      profileImageSrc: "/images/Logo.png",
      userName: "2번 목데이터",
      userJob: "백수",
      connection: 555,
      explanation: "2번 목데이터",
    },
    {
      id: 3,
      profileImageSrc: "/images/Logo.png",
      userName: "3번 목데이터",
      userJob: "돈많은 백수",
      connection: 333,
      explanation: "3번 목데이터",
    },
  ];
  return (
    <div>
      <PaddingWrapper>
        <ButtonContainer>
          <ReceivedButton>RECEIVED</ReceivedButton>
          <SentButton>SENT</SentButton>
        </ButtonContainer>
        <NewConnectionWrapper>
          <StyleWrapper>
            <NetworkConnectionUnderLine />
            <NewConnectionLetter>
              <Black>YOU HAVE</Black>
              <Blue> 2 NEW CONNECTIONS</Blue>
            </NewConnectionLetter>
            <NetworkConnectionUnderLine />
          </StyleWrapper>
        </NewConnectionWrapper>
      </PaddingWrapper>
      <div>
        {UserData.map((data) => (
          <NetworkNewConnectionUserItem data={data} />
        ))}
      </div>
    </div>
  );
};

export default NetworkRecievedView;

const PaddingWrapper = styled.div``;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 850px;
  height: 50px;
`;

const ButtonStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 50px;
  border-radius: 4px 4px 0px 0px;
  text-align: center;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;
const ReceivedButton = styled(ButtonStyle)`
  background: linear-gradient(180deg, #0077b5 0%, #0e6795 100%);
  color: #fff;
`;

const SentButton = styled(ButtonStyle)`
  border: 1px solid #e7e7e7;
  background: #fff;
`;

const NewConnectionWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  width: 850px;
  height: 50px;
  margin-bottom: 29px;
`;
const NetworkConnectionUnderLine = styled.div`
  width: 310px;
  height: 1px;
  background: #e7e7e7;
`;

const NewConnectionLetter = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 8px;
`;

const Black = styled.p`
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  color: black;
  margin-right: 8px;
`;
const Blue = styled.p`
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  color: #0275b1;
`;

const StyleWrapper = styled.div`
  display: flex;
  align-items: center;
`;
