"use client";

import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
interface ModalProps {
  newBtn: boolean;
  deleteclick: boolean;
  title: string;
  children: React.ReactNode;
}

const ModalEdit: React.FC<ModalProps> = ({
  newBtn,
  deleteclick,
  title,
  children,
}) => {
  const [modalCheck, setModalCheck] = useState<boolean>(false);
  const clickModal = (value: boolean) => {
    setModalCheck(value);
    if (value === false) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };
  return (
    <ModalEditStyle>
      <ModalBox active={modalCheck}>
        <ModalBlack />
        <ModalInfo>
          <ModalExit
            alt="종료 아이콘"
            src="/images/exit.png"
            width={40}
            height={40}
            onClick={() => {
              clickModal(false);
            }}
          />
          <ModalTitle>{title}</ModalTitle>
          <ModalMiddle>{children}</ModalMiddle>
          <ModalFooter>
            <ModalDeleteBtn active={deleteclick}>삭제</ModalDeleteBtn>
            <ModalSaveBtn>저장</ModalSaveBtn>
          </ModalFooter>
        </ModalInfo>
      </ModalBox>
      <Edit
        alt="수정 아이콘"
        src={`/images/${newBtn === true ? "plus" : "blackpencil"}.png`}
        width={20}
        height={20}
        onClick={() => {
          clickModal(true);
        }}
      />
    </ModalEditStyle>
  );
};

export default ModalEdit;

const ModalEditStyle = styled.div``;

interface ModalBoxProps {
  active: boolean;
}

const ModalBox = styled.div<ModalBoxProps>`
  display: ${(props) => (props.active === true ? "block" : "none")};
`;

const ModalBlack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const ModalInfo = styled.div`
  border-radius: 6px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 744px;
  height: calc(100vh - 96px);
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 11;
  display: flex;
  flex-direction: column;
`;

const ModalExit = styled(Image)`
  position: absolute;
  top: 13px;
  right: 13px;
  cursor: pointer;
`;

const ModalTitle = styled.div`
  padding: 0 48px 0 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 22px;
  font-family: Gotham Pro;
  font-weight: 700;
  height: 65px;
  display: flex;
  align-items: center;
`;

const ModalMiddle = styled.div`
  padding: 50px 100px 50px 100px;
`;

const ModalFooter = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  height: 65px;
  display: flex;
  align-items: center;
  border-radius: 0 0 6px 6px;
`;

interface ModalDeleteBtnProps {
  active: boolean;
}

const ModalDeleteBtn = styled.div<ModalDeleteBtnProps>`
  left: 30px;
  top: 13px;
  width: 55px;
  color: red;
  padding: 10px 7px 10px 7px;
  text-align: center;
  font-family: Gotham Pro;
  font-weight: 700;
  border-radius: 18px;
  position: absolute;
  cursor: pointer;
  display: ${(props) => (props.active !== true ? "block" : "none")};
`;

const ModalSaveBtn = styled.div`
  right: 20px;
  top: 13px;
  width: 55px;
  color: white;
  padding: 10px 7px 10px 7px;
  text-align: center;
  font-family: Gotham Pro;
  font-weight: 700;
  border-radius: 18px;
  background-color: blue;
  position: absolute;
  cursor: pointer;
`;

const Edit = styled(Image)`
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
`;
