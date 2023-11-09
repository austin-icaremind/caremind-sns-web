"use client";
// import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";

const FeedModal: React.FC = () => {
  // const router = useRouter();
  // const id = router.query.id
  const id = 1;

  return (
    <ModalWrapper>
      <ContentWrapper>
        {id === 1 ? (
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
            <IconWrapper>
              <Image
                alt="삭제 아이콘"
                src="/images/bin.png"
                width={20}
                height={20}
              />
              삭제
            </IconWrapper>
          </IconContainer>
        ) : (
          <IconContainer>
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

export default FeedModal;

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
