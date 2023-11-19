"use client";

import styled from "styled-components";
import NetworkRecievedItem from "./NetworkRecievedItem";
import { useState } from "react";

const NetworkRecievedView: React.FC<{ receivedData: any; sentData: any }> = ({
  receivedData,
  sentData,
}) => {
  const [currentData, setCurrentData] = useState(receivedData);
  const [selectedIdx, setSelectedIdx] = useState(0);

  const BUTTON_DATA = [
    {
      text: "RECEIVED",
      onClick: () => {
        setSelectedIdx(0);
        setCurrentData(receivedData);
      },
    },
    {
      text: "SENT",
      onClick: () => {
        setSelectedIdx(1);
        setCurrentData(sentData);
      },
    },
  ];

  return (
    <div>
      <PaddingWrapper>
        <ButtonContainer>
          {BUTTON_DATA.map(({ text, onClick }, idx) => (
            <Button
              key={text}
              onClick={onClick}
              $isSelected={idx === selectedIdx}
            >
              {text}
            </Button>
          ))}
        </ButtonContainer>
        <NewConnectionWrapper>
          <StyleWrapper>
            <NetworkConnectionUnderLine />
            {currentData === receivedData ? (
              <NewConnectionLetter>
                <Black>YOU HAVE</Black>
                <Blue>{currentData.length} NEW CONNECTIONS</Blue>
              </NewConnectionLetter>
            ) : (
              <NewConnectionLetter>
                <Black>YOU SEND</Black>
                <Blue>{currentData.length} CONNECTIONS</Blue>
              </NewConnectionLetter>
            )}
            <NetworkConnectionUnderLine />
          </StyleWrapper>
        </NewConnectionWrapper>
      </PaddingWrapper>
      <div>
        {currentData.map((data: any) => (
          <NetworkRecievedItem data={data} />
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
  align-items: flex-end;
  width: 850px;
  height: 50px;
  border-bottom: 1px solid #e7e7e7;
`;

const Button = styled.button<{ $isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: ${(props) => (props.$isSelected ? "50px" : "40px")};
  background: ${(props) =>
    props.$isSelected
      ? "linear-gradient(180deg, #0077b5 0%, #0e6795 100%)"
      : "#fff"};
  color: ${(props) => (props.$isSelected ? "#fff" : "black")};
  border: ${(props) => (!props.$isSelected ? "1px solid #e7e7e7" : "none")};
  border-radius: 4px 4px 0px 0px;
  text-align: center;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  cursor: pointer;
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
