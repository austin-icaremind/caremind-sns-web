"use client";

import NetworkRecievedView from "./components/NetworkRecievedView";
import { useEffect, useState } from "react";
import styled from "styled-components";
import NetworkRecentConnectView from "./components/NetworkMyConnectView";
import NetworkViewModel from "@/view-model/network/class/NetworkViewModel";
const NetworkView = () => {
  const [recievedData, setRecievedData] = useState<any | null>(null);
  const [sentData, setSentData] = useState<any | null>(null);
  const [myConnectionData, setMyConnectionData] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getRecievedData = await NetworkViewModel.getRecievedConnection();

        setRecievedData(getRecievedData);

        const getSentData = await NetworkViewModel.getSentConnection();

        setSentData(getSentData);

        const getMyConnectionData = await NetworkViewModel.getMyConnection();
        setMyConnectionData(getMyConnectionData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (recievedData === null || sentData === null || myConnectionData == null) {
    return <div>Loading...</div>;
  }

  return (
    <PaddingWrapper>
      <NetworkRecievedView receivedData={recievedData} sentData={sentData} />
      <NetworkRecentConnectView data={myConnectionData} />
    </PaddingWrapper>
  );
};

export default NetworkView;

const PaddingWrapper = styled.div`
  width: 850px;
  margin: 40px 0;
`;
