"use client";

import styled from "styled-components";

const NetworkRecievedView = () => {
  return (
    <PaddingWrapper>
      <ButtonContainer>
        <ReceivedButton>RECEIVED</ReceivedButton>
        <SentButton>SENT</SentButton>
      </ButtonContainer>
      <NewConnectionWrapper>
        <StyleWrapper>
          <NetworkConnectionUnderLine />
          <NewConnectionLetter>
            <Black>YOU HAVE</Black>
            <Blue> 2 NEW CONNECTIONS</Blue>
          </NewConnectionLetter>
          <NetworkConnectionUnderLine />
        </StyleWrapper>
      </NewConnectionWrapper>
    </PaddingWrapper>
  );
};

export default NetworkRecievedView;

const PaddingWrapper = styled.div``;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 850px;
  height: 50px;
`;

const ButtonStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 50px;
  border-radius: 4px 4px 0px 0px;
  text-align: center;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;
const ReceivedButton = styled(ButtonStyle)`
  background: linear-gradient(180deg, #0077b5 0%, #0e6795 100%);
  color: #fff;
`;

const SentButton = styled(ButtonStyle)`
  border: 1px solid #e7e7e7;
  background: #fff;
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
