"use clients";

import React from "react";
import styled from "styled-components";
import FeedItem from "./FeedItem";
import { GetFeedListData } from "@/view-model/feed/interface/FeedViewModelInterface";

const FeedListView: React.FC<{
  data: any;
  myProfileData: any;
  clickFunction: any;
}> = ({ data, myProfileData, clickFunction }) => {
  return (
    <FeedListWrapper>
      <ModalWrapper>
        {data.map((feed: GetFeedListData) => (
          <FeedItem
            clickFunction={clickFunction}
            data={feed}
            myProfileData={myProfileData}
          />
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
