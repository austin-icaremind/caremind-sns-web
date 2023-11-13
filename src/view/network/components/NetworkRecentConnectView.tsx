"use client";
import styled from "styled-components";
import NetworkRecentConnectItem from "./NetworkRecentConnectItem";

const NetworkRecentConnectView = () => {
  type FeedData = {
    // 나중에 키값 백엔드랑 맞추기//
    id: number;
    profileImageSrc: string;
    userName: string;
    position: string;
    date: string;
  };

  const UserData: FeedData[] = [
    {
      id: 1,
      profileImageSrc: "/images/thumbs-up.png",
      userName: "Theresa Steward",
      position: "iOS developer",
      date: "어제",
    },
    {
      id: 2,
      profileImageSrc: "/images/Logo.png",
      userName: "2번 목데이터",
      position: "백수",
      date: "그제",
    },
    {
      id: 3,
      profileImageSrc: "/images/Logo.png",
      userName: "3번 목데이터",
      position: "돈많은 백수",
      date: "그저께",
    },
    {
      id: 4,
      profileImageSrc: "/images/Logo.png",
      userName: "4번 목데이터",
      position: "돈많은 백수",
      date: "오늘",
    },
  ];
  return (
    <RecentConnectWrapper>
      <StyleWrapper>
        <NetworkConnectionUnderLine />
        <NewConnectionLetter>recent connections</NewConnectionLetter>
        <NetworkConnectionUnderLine />
      </StyleWrapper>
      <ItemWrapper>
        {UserData.map((data) => (
          <NetworkRecentConnectItem data={data}></NetworkRecentConnectItem>
        ))}
      </ItemWrapper>
    </RecentConnectWrapper>
  );
};

export default NetworkRecentConnectView;

const RecentConnectWrapper = styled.div`
  width: 850px;
`;

const NetworkConnectionUnderLine = styled.div`
  width: 310px;
  height: 1px;
  background: #e7e7e7;
`;

const NewConnectionLetter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;

const StyleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;
const ItemWrapper = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr); // 2x2 그리드 설정
  gap: 10px;
`;
