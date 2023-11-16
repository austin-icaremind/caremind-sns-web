"use client";

import styled from "styled-components";
import Image from "next/image";
import NetworkViewModel from "@/view-model/network/class/NetworkViewModel";

const NetworkRecievedItem: React.FC<{ data: any }> = ({ data }) => {
  const { id, connectedUser, message } = data;

  const isSentData = data.isAccepted === false;

  const handleAccept = async () => {
    await NetworkViewModel.RecievedAccept(data.id);
    await NetworkViewModel.getRecievedConnection();
  };

  const handledecline = async () => {
    await NetworkViewModel.RecievedDecline(data.id);
    if (isSentData) {
      await NetworkViewModel.getSentConnection();
    } else {
      await NetworkViewModel.getRecievedConnection();
    }
  };
  // const router = useRouter();
  return (
    <MapWrapper key={id}>
      <NewConnectionUserWrapper>
        <PaddingWrapper>
          <UserImage
            alt="profileImage"
            src={connectedUser.profileImage}
            width={52}
            height={52}
          ></UserImage>
          <UserNameInformationWrapper>
            <FirstLine>{connectedUser.name}</FirstLine>
            <SecondLine></SecondLine>
            <ThirdLine>connections</ThirdLine>
          </UserNameInformationWrapper>
          <UserIntroductionWrapper>{message}</UserIntroductionWrapper>
          <ButtonContainer>
            {isSentData ? null : (
              <AcceptButton onClick={handleAccept}>ACCEPT</AcceptButton>
            )}
            <DeclineButton onClick={handledecline}>
              {isSentData ? "CANCLE" : "DECLINE"}
            </DeclineButton>
          </ButtonContainer>
        </PaddingWrapper>
      </NewConnectionUserWrapper>
    </MapWrapper>
  );
};

export default NetworkRecievedItem;

const MapWrapper = styled.div`
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  width: 230px;
  display: flex;
  justify-content: flex-end;
`;
const NewConnectionUserWrapper = styled.div`
  min-height: 95px;
  width: 850px;
  height: auto;
  flex-shrink: 0;
  border-radius: 4px;
  background: #fff;
`;

const PaddingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 30px;
`;
const UserImage = styled(Image)`
  border-radius: 50%;
`;

const UserNameInformationWrapper = styled.div`
  margin: 0 15px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 164px;
  border-right: 2px solid #0275b1;
`;

const LetterStyle = styled.p`
  font-family: Gotham Pro;
  font-style: normal;
`;
const FirstLine = styled(LetterStyle)`
  color: #181818;
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
`;
const SecondLine = styled(LetterStyle)`
  color: #181818;
  font-size: 10px;
  font-weight: 400;
  line-height: 150%;
`;
const ThirdLine = styled(LetterStyle)`
  color: #0275b1;
  font-size: 10px;
  font-weight: 300;
  line-height: 150%;
`;

const UserIntroductionWrapper = styled.div`
  width: 300px;
  min-height: 45px;
  color: rgba(24, 24, 24, 0.6);
  font-family: Gotham Pro;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 15px */
`;

const ButtonStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 91px;
  height: 32px;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
  text-align: center;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;
const AcceptButton = styled(ButtonStyle)`
  background: linear-gradient(180deg, #0077b5 0%, #0e6795 100%);
  color: #fff;
`;

const DeclineButton = styled(ButtonStyle)`
  margin-left: 15px;
  color: #b7b7b7;
  border: 1px solid #b7b7b7;
`;
