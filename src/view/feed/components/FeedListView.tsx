"use clients";

import React from "react";
import styled from "styled-components";
import FeedItem from "./FeedItem";
import { GetFeedListData } from "@/view-model/profile/interface/FeedViewModelInterface";

const FeedListView: React.FC<{ data: GetFeedListData }> = ({ data }) => {
  return (
    <FeedListWrapper>
      <ModalWrapper>
        {data.map((feed: GetFeedListData) => (
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
