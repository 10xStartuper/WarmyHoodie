import React from "react";
import styled from "styled-components";
import { colors } from "../../configs/";
import { logo } from "../../assets/";
import { MainButton, SecondaryButton } from "../Buttons/";

const Container = styled.div`
  padding: 26px 64px;
  background: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.img`
  max-height: 42px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 330px;
`;

const Navbar = () => {
  return (
    <Container>
      <Logo src={logo} />
      <ButtonContainer>
        <SecondaryButton>Войти</SecondaryButton>
        <MainButton>заказываете сейчас</MainButton>
      </ButtonContainer>
    </Container>
  );
};

export { Navbar };
