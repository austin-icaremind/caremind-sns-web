"use clients";

import React from "react";
import styled from "styled-components";
import Image from "next/image";

const FeedListView = () => {
  return (
    <FeedListWrapper>
      <RecommandedWrapper>
        <RecommandedTitle>
          <BlueText>Ted Bell, Annette Nguyen</BlueText>
          <BlackText>and</BlackText>
          <BlueText>Cody Hawkins</BlueText> <BlackText>liked this</BlackText>
        </RecommandedTitle>
        <HambergerIconWrapper>
          <HambergerIcon
            alt="더보기버튼"
            src="/images/more-horizontal.png"
            width={24}
            height={24}
          ></HambergerIcon>
        </HambergerIconWrapper>
      </RecommandedWrapper>
      <FeedContentWrapper>
        <PaddingContainer>
          <ProfileImageAndName>
            {/* 나중에 데이터받아서 이미지 넣기 */}
            <ProfileImage
              alt="프로필이미지"
              src="/images/thumbs-up.png"
              width={52}
              height={52}
            ></ProfileImage>
            <NameAndJobWrapper>
              {/* 나중에 이름 넣기 */}
              <UserName>Theresa Steward</UserName>
              {/* 나중에 직업 넣기 */}
              <UserJob>iOS developer</UserJob>
            </NameAndJobWrapper>
          </ProfileImageAndName>
          <FeedTextWrapper>
            {/* 피드 내용 데이터로 받기 */}
            <FeedText>How’s your day going,</FeedText>
          </FeedTextWrapper>
          {/* {feedImage && (
            <FeedImage
              src={feedImage}
              width={790}
              height={300}
              alt="피드 이미지"
            ></FeedImage>
          )} */}
        </PaddingContainer>
      </FeedContentWrapper>
      <LikeAndCommentShareWrapper>
        <LikeAndCommentWrapper>
          <LikeWrapper>
            <LikeIcon
              alt="좋아요 아이콘"
              src="/images/thumbs-up.png"
              width={16}
              height={16}
            ></LikeIcon>
            {/* 나중에 데이터로 좋아요 숫자 넣기 */}
            <LikeNumber>42</LikeNumber>
          </LikeWrapper>
          <CommentWrapper>
            <CommentIcon
              alt="댓글 아이콘"
              src="/images/message-circle.png"
              width={16}
              height={16}
            ></CommentIcon>
            {/* 나중에 데이터로 댓글 숫자 넣기 */}
            <CommentNumber>9</CommentNumber>
          </CommentWrapper>
        </LikeAndCommentWrapper>
        <ShareWrapper>
          <ShareIcon
            alt="공유 아이콘"
            src="/images/share-2.png"
            width={16}
            height={16}
          ></ShareIcon>
          <ShareText>Share</ShareText>
        </ShareWrapper>
      </LikeAndCommentShareWrapper>
    </FeedListWrapper>
  );
};

export default FeedListView;

const FeedListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 850px;
  border-radius: 4px;
  background: #fff;
  gap: 30px;
`;

const RecommandedWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  height: 45px;
  border-bottom: 1px solid #f4f4f4;
`;

const RecommandedTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

const BlueText = styled.p`
  color: #0275b1;
  font-family: Gotham Pro;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 15px */
`;
const BlackText = styled.p`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
`;

const HambergerIconWrapper = styled.div``;
const HambergerIcon = styled(Image)`
  cursor: pointer;
  transform: rotate(90deg);
`;

const FeedContentWrapper = styled.div``;

const PaddingContainer = styled.div`
  padding: 15px 30px 0 30px;
`;

const LikeAndCommentShareWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid #f4f4f4;
  width: 850px;
  height: 49px;
`;

const LikeAndCommentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 188px;
  height: 49px;
`;

const IconWrapperStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 49px;
  cursor: pointer;
`;
const LikeWrapper = styled(IconWrapperStyle)`
  width: 98px;
  border-right: 1px solid #f4f4f4;
`;

const LikeIcon = styled(Image)``;

const LikeNumber = styled.span`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;

const CommentWrapper = styled(IconWrapperStyle)`
  width: 98px;
  border-right: 1px solid #f4f4f4;
`;

const CommentIcon = styled(Image)``;

const CommentNumber = styled.span`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;

const ShareWrapper = styled(IconWrapperStyle)`
  width: 126px;
  border-left: 1px solid #f4f4f4;
`;

const ShareIcon = styled(Image)``;

const ShareText = styled.span`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;

const ProfileImageAndName = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProfileImage = styled(Image)`
  border-radius: 50%;
  background-color: red;
`;

const NameAndJobWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: 15px;
`;

const UserName = styled.p`
  margin-top: 10px;
  color: #181818;
  font-family: Gotham Pro;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const UserJob = styled.p`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

const FeedTextWrapper = styled.div`
  margin-top: 15px;
  width: 100%;
  height: auto;
  margin-bottom: 15px;
`;

const FeedText = styled.div`
  width: 100%;
  height: auto;
  color: #181818;
  font-family: Gotham Pro;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  word-break: break-word;
`;

const FeedImage = styled(Image)``;
