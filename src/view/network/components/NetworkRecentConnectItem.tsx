import styled from "styled-components";
import Image from "next/image";

const NetworkRecentConnectItem = () => {
  return (
    <ItemWrapper>
      <ContentWrapper>
        <UserImage
          alt="유저 이미지"
          src="/images/thumbs-up.png"
          width={52}
          height={52}
        ></UserImage>
        <InformationWrapper>
          <Name>Audrey Alexander</Name>
          <Position>Team lead at Google</Position>
        </InformationWrapper>
      </ContentWrapper>
      <DateWrapper>
        <Date>Yesterday, 14:30</Date>
      </DateWrapper>
    </ItemWrapper>
  );
};

export default NetworkRecentConnectItem;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 420px;
  height: 95px;
  border-radius: 4px;
  background: #fff;
  padding: 20px 15px 10px 30px;
`;

const UserImage = styled(Image)`
  border-radius: 50%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  margin-left: 15px;
`;

const Name = styled.p`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Position = styled.p`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 15px */
`;

const DateWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Date = styled.p`
  color: rgba(24, 24, 24, 0.3);
  text-align: right;
  font-family: Gotham Pro;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
