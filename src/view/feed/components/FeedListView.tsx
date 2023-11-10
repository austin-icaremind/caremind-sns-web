"use clients";

import React from "react";
import styled from "styled-components";
import FeedItem from "./FeedItem";

const FeedListView = () => {
  type FeedData = {
    // 나중에 키값 백엔드랑 맞추기//
    id: number;
    profileImageSrc: string;
    userName: string;
    userJob: string;
    feedText: string;
  };

  const feedData: FeedData[] = [
    {
      id: 1,
      profileImageSrc: "/images/thumbs-up.png",
      userName: "Theresa Steward",
      userJob: "iOS developer",
      feedText: "How’s your day going,",
    },
    {
      id: 2,
      profileImageSrc: "/images/Logo.png",
      userName: "2번 목데이터",
      userJob: "백수",
      feedText: "배가 고파요,",
    },
    {
      id: 3,
      profileImageSrc: "/images/Logo.png",
      userName: "3번 목데이터",
      userJob: "돈많은 백수",
      feedText: "배가 고파요,",
    },
  ];

  return (
    <FeedListWrapper>
      <ModalWrapper>
        {feedData.map((feed) => (
          <FeedItem data={feed} />
        ))}
      </ModalWrapper>
    </FeedListWrapper>
  );
};

export default FeedListView;
const ModalWrapper = styled.div``;

const FeedListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 850px;
  border-radius: 4px;
`;
