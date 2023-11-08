"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";

interface FooterSection {
  id: number;
  title: string[];
}

const Header: React.FC = () => {
  return <HeaderWrapper></HeaderWrapper>;
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 1440px;
  height: 215px;
  border: 1px solid pink;
`;
