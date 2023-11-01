class SignUpViewModel {
  private email: string;
  private password: string;
  private passwordCheck: string;

  constructor(email: string, password: string, passwordCheck: string) {
    this.email = email;
    this.password = password;
    this.passwordCheck = passwordCheck;
  }

  isEmailValid(): boolean {
    const emailRegex: RegExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return emailRegex.test(this.email);
  }

  isPasswordValid(): boolean {
    const pwRegex: RegExp =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,20}$/;
    return pwRegex.test(this.password);
  }

  doPasswordsMatch(): boolean {
    return this.password === this.passwordCheck;
  }

  showAlert(): void {
    if (!this.isEmailValid()) {
      alert("이메일이 유효하지 않습니다.");
    } else if (!this.isPasswordValid()) {
      alert("비밀번호가 유효하지 않습니다.");
    } else if (!this.doPasswordsMatch()) {
      alert("비밀번호 확인이 일치하지 않습니다.");
    } else {
      alert("회원가입 성공!");
    }
  }
}

export default SignUpViewModel;
