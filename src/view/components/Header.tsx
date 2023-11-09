"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <IconWrapper>
        <Logo alt="로고" src="/images/Logo.png" width={46} height={46}></Logo>
      </IconWrapper>
      <FeedAndNetworkWrapper>
        <FeedWrapper>
          <Feed alt="피드아이콘" src="/images/rss.png" width={24} height={24} />
          <FeedLetter>FEED</FeedLetter>
        </FeedWrapper>
        <NetworkWrapper>
          <Network
            alt="네트워크아이콘"
            src="/images/users.png"
            width={24}
            height={24}
          />
          <NetworkLetter>NETWORK</NetworkLetter>
        </NetworkWrapper>
      </FeedAndNetworkWrapper>
      <SearchWrapper>
        <SearchIcon
          alt="검색아이콘"
          src="/images/search.png"
          width={24}
          height={24}
        />
        <SearchInput placeholder="Search"></SearchInput>
      </SearchWrapper>
      <ProfileWrapper>
        <ProfileImage
          alt="프로필 이미지"
          src={"/images/Ellipse.png"} //data 프로필 이미지 넣기
          height={42}
          width={42}
        />
        <UserNameWrapper>
          <MyWrapper>
            <UserName>권adfdasfafafafas순우</UserName>
            <YouLetter>YOU</YouLetter>
          </MyWrapper>
          <VisitorWrapper>
            <TodayView>367 views today</TodayView>
            <AddedNumber>+32</AddedNumber>
          </VisitorWrapper>
        </UserNameWrapper>
      </ProfileWrapper>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80px;
  flex-shrink: 0;
  background: #fff;
  box-shadow: 0px 10px 40px 0pxrgba (89, 120, 150, 0.06);
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 80px;
  border-right: 1px solid #f4f4f4;
`;

const Logo = styled(Image)`
  cursor: pointer;
`;

const FeedAndNetworkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 80px;
  border-right: 1px solid #f4f4f4;
`;

const Iconstyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 80px;
  gap: 10px;
`;
const FeedWrapper = styled(Iconstyle)`
  margin-left: 13px;
`;

const NetworkWrapper = styled(Iconstyle)``;

const Feed = styled(Image)`
  cursor: pointer;
`;
const Network = styled(Image)`
  cursor: pointer;
`;

const IconLetterStyle = styled.p`
  color: #0275b1;
  text-align: center;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  color: #181818;
`;
const FeedLetter = styled(IconLetterStyle)``;

const NetworkLetter = styled(IconLetterStyle)`
  /* color: #0275b1; */
`;

const SearchWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 367px;
  height: 80px;
  border-right: 1px solid #f4f4f4;
  padding-left: 30px;
`;

const SearchIcon = styled(Image)`
  cursor: pointer;
`;

const SearchInput = styled.input`
  margin-left: 20px;
  color: #cecece;
  font-family: Gotham Pro;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  border: none;
`;

const ProfileWrapper = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 460px;
  height: 80px;
`;

const ProfileImage = styled(Image)`
  border-radius: 50%;
`;

const UserNameWrapper = styled.div`
  margin-left: 15px;
`;

const UserNameStyle = styled.span`
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;
const UserName = styled(UserNameStyle)`
  color: #181818;
`;

const YouLetter = styled(UserNameStyle)`
  margin-left: 10px;
  color: rgba(24, 24, 24, 0.2);
  font-weight: 400;
`;

const TodayView = styled(UserNameStyle)`
  font-weight: 400;
  color: #747474;
`;

const AddedNumber = styled(UserNameStyle)`
  color: #02b033;
  margin-left: 4px;
`;

const MyWrapper = styled.div``;

const VisitorWrapper = styled.div`
  margin-top: 10px;
`;
