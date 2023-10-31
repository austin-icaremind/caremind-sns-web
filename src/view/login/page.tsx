"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const LoginComponent: React.FC = () => {
  const [emailInfo, setEmailInfo] = useState<string>("");
  const [passwordInfo, setPasswordInfo] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/");
  };

  const handleGoToSignUp = () => {
    router.push("/signup");
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const saveUserEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInfo(e.target.value);
  };

  const saveUserPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInfo(e.target.value);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // if (emailInfo === "") {
    //   alert("이메일을 입력해주세요");
    //   return;
    // } else if (passwordInfo === "") {
    //   alert("비밀번호를 입력해주세요");
    //   return;
    // }
    // fetch(`api주소`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //   },
    //   body: JSON.stringify({
    //     email: emailInfo,
    //     password: passwordInfo,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.message === "LOGIN_SUCCESS") {
    alert("로그인이 성공했습니다");
    handleNavigate();
    //       localStorage.setItem("loginToken", data.token);
    //     } else if (data.message === "NOT_REGISTERED") {
    //       alert("이메일이 존재하지않습니다");
    //     } else if (data.message === "WRONG_PASSWORD") {
    //       alert("비밀번호가 틀렷습니다");
    //     }
    //   });
  };

  return (
    <div>
      <Wrapper>
        <Logo>CareMind</Logo>
        <Title>로그인</Title>
        <EmailInput
          type="text"
          placeholder="이메일을 입력하세요"
          onChange={saveUserEmail}
          value={emailInfo}
        ></EmailInput>
        <PasswordWrapper>
          <PasswordInput
            type={showPassword ? "text" : "password"}
            placeholder="비밀번호를 입력하세요"
            onChange={saveUserPassword}
            value={passwordInfo}
          ></PasswordInput>
          <ShowButton onClick={handleShowPassword}>
            {showPassword ? "숨기기" : "보기"}
          </ShowButton>
        </PasswordWrapper>
        <LoginButton onClick={handleLogin}>로그인</LoginButton>
        <SignUpLetter onClick={handleGoToSignUp}>
          회원이 아니신가요?
        </SignUpLetter>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 100vh;
`;

const Logo = styled.h1`
  color: #8bc34a;
`;
const Title = styled.p`
  font-size: 30px;
`;

const InputStyle = styled.input`
  width: 200px;
  height: 30px;
`;
const EmailInput = styled(InputStyle)``;

const PasswordInput = styled(InputStyle)``;

const LoginButton = styled.button`
  width: 200px;
  height: 30px;
  font-size: 20px;
  background-color: #8bc34a;
  color: white;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;

const SignUpLetter = styled.div`
  cursor: pointer;
  opacity: 0.3;
  font-size: 14px;
`;

const PasswordWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const ShowButton = styled.div`
  position: absolute;
  right: 0;
  font-size: 14px;
  cursor: pointer;
`;

export default LoginComponent;
