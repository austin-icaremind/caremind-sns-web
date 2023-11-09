"use client";

import FeedPostView from "./components/FeedPostView";
import FeedListView from "./components/FeedListView";
import styled from "styled-components";
import { useState } from "react";
import FeedMyProfileView from "./components/FeedMyProfileView";
import FeedHashTagView from "./components/FeedHashTagView";

const FeedView = () => {
  const [index, setIndex] = useState<string>("0");
  const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIndex(e.target.value);
  };
  return (
    <FeedWrapper>
      <FeedLeftContent>
        <FeedPostView />
        <SortContainer>
          <SortLine />
          <SortLetterContainer>
            <SortBy>Sort By:</SortBy>
            <SortSection value={index} onChange={onSelect}>
              <option value="0">trending</option>
              <option value="1">latest</option>
            </SortSection>
          </SortLetterContainer>
        </SortContainer>
        <FeedListView />
      </FeedLeftContent>
      <FeedRightContent>
        <FeedMyProfileView />
        <FeedHashTagView />
      </FeedRightContent>
    </FeedWrapper>
  );
};

export default FeedView;
const FeedWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin: 40px 0;
`;

const FeedLeftContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const SortContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 850px;
  height: 80px;
`;

const SortLine = styled.div`
  width: 684px;
  height: 1px;
  background-color: #e7e7e7;
`;

const SortSection = styled.select`
  width: 90px;
  height: 20px;
  border: none;
  background-color: transparent;
  color: #0275b1;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;

const SortLetterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 150px;
`;
const SortBy = styled.p`
  color: black;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;

const FeedRightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
