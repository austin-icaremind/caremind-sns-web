import styled from "styled-components";
import Image from "next/image";

const NetworkRecentConnectItem: React.FC<{ data: any }> = ({ data }) => {
  const { id, profileImageSrc, userName, position, date } = data;
  return (
    <ItemWrapper key={id}>
      <PaddinWrapper>
        <ContentWrapper>
          <UserImage
            alt="유저 이미지"
            src={profileImageSrc}
            width={52}
            height={52}
          ></UserImage>
          <InformationWrapper>
            <Name>{userName}</Name>
            <Position>{position}</Position>
          </InformationWrapper>
        </ContentWrapper>
        <DateWrapper>
          <Date>{date}</Date>
        </DateWrapper>
      </PaddinWrapper>
    </ItemWrapper>
  );
};

export default NetworkRecentConnectItem;

const ItemWrapper = styled.div`
  width: 420px;
  height: 95px;
  border-radius: 4px;
  background: #fff;
`;

const PaddinWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
