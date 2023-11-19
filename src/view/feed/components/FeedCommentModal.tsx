"use client";

import styled from "styled-components";
import Image from "next/image";
import FeedViewModel from "@/view-model/feed/class/FeedViewModel";
const FeedCommentModal: React.FC<{ id: any; userId: any }> = ({
  id,
  userId,
}) => {
  const localId: number | null = parseInt(
    localStorage.getItem("userId") || "-1",
    10
  );

  const handleDelete = async () => {
    await FeedViewModel.deleteComment(id);
  };

  return (
    <ModalWrapper>
      <ContentWrapper>
        {userId.id === localId ? (
          <IconContainer>
            <IconWrapper>
              <Image
                alt="수정 아이콘"
                src="/images/pencil.png"
                width={20}
                height={20}
              />
              수정
            </IconWrapper>
            <IconWrapper onClick={handleDelete}>
              <Image
                alt="삭제 아이콘"
                src="/images/bin.png"
                width={20}
                height={20}
              />
              삭제
            </IconWrapper>
            <IconWrapper>
              <Image
                alt="링크 아이콘"
                src="/images/link.png"
                width={20}
                height={20}
              />
              링크 복사
            </IconWrapper>
          </IconContainer>
        ) : (
          <IconContainer>
            {/* <IconWrapper>
              <Image
                alt="링크 아이콘"
                src="/images/add-user.png"
                width={20}
                height={20}
              />
              친구 추가
            </IconWrapper> */}
            <IconWrapper>
              <Image
                alt="링크 아이콘"
                src="/images/link.png"
                width={20}
                height={20}
              />
              링크 복사
            </IconWrapper>
            <IconWrapper>
              <Image
                alt="신고 아이콘"
                src="/images/alarm.png"
                width={20}
                height={20}
              />
              신고
            </IconWrapper>
          </IconContainer>
        )}
      </ContentWrapper>
    </ModalWrapper>
  );
};

export default FeedCommentModal;

const ModalWrapper = styled.div`
  border: 1px solid #f4f4f4;
  max-width: 355px;
  width: 90vw;
  height: auto;
  background-color: white;
  border-radius: 4px 0 4px 4px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15);
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 30px;
  height: auto;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
