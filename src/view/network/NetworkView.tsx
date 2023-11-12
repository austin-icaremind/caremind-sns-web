"use client";

import NetworkRecievedView from "./components/NetworkRecievedView";
import NetworkRecentConnectView from "./components/NetworkRecentConnectView";
import styled from "styled-components";
import NetWorkNewConnectionUserView from "./components/NetWorkNewConnectionUserView";

const NetworkView = () => {
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
    <PaddingWrapper>
      <NetworkRecievedView />
      {UserData.map((feed) => (
        <NetWorkNewConnectionUserView data={feed} />
      ))}
      <NetworkRecentConnectView />
    </PaddingWrapper>
  );
};

export default NetworkView;

const PaddingWrapper = styled.div`
  width: 850px;
  margin: 40px 0;
`;
