"use clients";

import React from "react";
import styled from "styled-components";
import Image from "next/image";

const FeedHashTagView = () => {
  return (
    <HashTagWrapper>
      <PaddingWrapper>
        <FollowHashTagWrapper>
          <FollowhashTagLetter>Followed hashtags</FollowhashTagLetter>
        </FollowHashTagWrapper>
        <HashTagButtonWrapper>
          <HashTageButton>1231312124214</HashTageButton>
          <HashTageButton>1231312</HashTageButton>
          <HashTageButton>1231312211</HashTageButton>
        </HashTagButtonWrapper>
      </PaddingWrapper>
    </HashTagWrapper>
  );
};

export default FeedHashTagView;

const HashTagWrapper = styled.div`
  width: 290px;
  height: auto;
  min-height: 265px;
  border-radius: 4px;
  background: #fcfdfd;
`;

const PaddingWrapper = styled.div`
  padding: 0 30px;
`;

const FollowHashTagWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f4f4f4;
  width: 100%;
  height: 56px;
`;

const FollowhashTagLetter = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;

const HashTagButtonWrapper = styled.div`
  gap: 10px;
  width: 100%;
  height: auto;
  padding: 30px 0;
`;

const HashTageButton = styled.button`
  margin: 5px;
  height: 32px;
  padding: 7px 12px;
  border-radius: 4px;
  background: #e9f0f8;
  color: #181818;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 18px */
  border: none;
  cursor: pointer;
`;
