"use client";

import NetworkRecievedView from "./components/NetworkRecievedView";

import styled from "styled-components";
import NetworkRecentConnectView from "./components/NetworkRecentConnectView";

const NetworkView = () => {
  return (
    <PaddingWrapper>
      <NetworkRecievedView />
      <NetworkRecentConnectView />
    </PaddingWrapper>
  );
};

export default NetworkView;

const PaddingWrapper = styled.div`
  width: 850px;
  margin: 40px 0;
`;
