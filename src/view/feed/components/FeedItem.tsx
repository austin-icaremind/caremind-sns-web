import { useState } from "react";
import styled from "styled-components";
import FeedModal from "@/view/feed/components/FeedModal";
import Image from "next/image";
import { useEffect } from "react";
import FeedViewModel from "@/view-model/feed/class/FeedViewModel";

const FeedItem: React.FC<{ data: any }> = ({ data }) => {
  const id = data.id;
  const userId = data.author;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [likes, setLikes] = useState(data.likesCount);
  const [isLiked, setIsLiked] = useState(false);

  const handleModalOpen = (item: any) => {
    setSelectedOption(item);
    setIsModalOpen(!isModalOpen);
  };

  const handleModalClose = () => {
    setSelectedOption(null);
    setIsModalOpen(false);
  };
  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest(".modal-container")) {
      handleModalClose();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isModalOpen]);

  const userInformation = data.author;

  const handleLike = async () => {
    if (!isLiked) {
      await FeedViewModel.postLikeData(id);
      setLikes((prevLikes: number) => prevLikes + 1);
    } else {
      await FeedViewModel.deleteLikeData(id);
      setLikes((prevLikes: number) => prevLikes - 1);
    }
    setIsLiked(!isLiked);
  };
  return (
    <MapWrapper key={id}>
      <RecommandedWrapper>
        <RecommandedTitle>
          <BlueText>Ted Bell, Annette Nguyen</BlueText>
          <BlackText>and</BlackText>
          <BlueText>Cody Hawkins</BlueText> <BlackText>liked this</BlackText>
        </RecommandedTitle>
        <HambergerIconWrapper>
          <HambergerIcon onClick={handleModalOpen}>
            <FeedLocation>
              {isModalOpen && <FeedModal feedId={id} userId={userId} />}
            </FeedLocation>
          </HambergerIcon>
        </HambergerIconWrapper>
      </RecommandedWrapper>
      <FeedContentWrapper>
        <PaddingContainer>
          <ProfileImageAndName>
            <ProfileImage
              alt="프로필이미지"
              src={userInformation.profileImage}
              width={52}
              height={52}
            ></ProfileImage>
            <NameAndJobWrapper>
              <UserName>{userInformation.name}</UserName>
              <UserJob>{userInformation.job}</UserJob>
            </NameAndJobWrapper>
          </ProfileImageAndName>
          <FeedTextWrapper>
            <FeedText>{data.content}</FeedText>
          </FeedTextWrapper>
          {data.images.length > 0 && (
            <ImageMapWrapper>
              {data.images.map((item: any) => (
                <FeedImage
                  key={item.id}
                  src={item.image}
                  width={790}
                  height={300}
                  alt="피드 이미지"
                ></FeedImage>
              ))}
            </ImageMapWrapper>
          )}
        </PaddingContainer>
      </FeedContentWrapper>
      <LikeAndCommentShareWrapper>
        <LikeAndCommentWrapper>
          <LikeWrapper onClick={handleLike}>
            <LikeIcon
              alt="좋아요 아이콘"
              src={
                !isLiked
                  ? "/images/thumbs-up.png"
                  : "/images/filled-thumbs-up.png"
              }
              width={16}
              height={16}
            ></LikeIcon>
            <LikeNumber>{likes}</LikeNumber>
          </LikeWrapper>
          <CommentWrapper>
            <CommentIcon
              alt="댓글 아이콘"
              src="/images/message-circle.png"
              width={16}
              height={16}
            ></CommentIcon>
            <CommentNumber>{data.commentsCount}</CommentNumber>
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
    </MapWrapper>
  );
};

export default FeedItem;

const ImageMapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MapWrapper = styled.div`
  margin-bottom: 30px;
  background: #fff;
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
const HambergerIcon = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
  background-image: url("/images/more-horizontal.png");
  position: relative;
`;

const FeedLocation = styled.div`
  position: absolute;
  bottom: -100px;
  right: 5px;
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
