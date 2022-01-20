import React from "react";
import styled from "styled-components";
import { colors } from "../../configs/";
import { logo } from "../../assets/";
import { MainButton, SecondaryButton, IconButton } from "../Buttons/";
import { ShoppingBag } from "react-feather";

const Container = styled.div`
  padding: 26px 64px;
  background: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.img`
  max-height: 40px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 388px;
`;

const Navbar = () => {
  return (
    <Container>
      <Logo src={logo} />
      <ButtonContainer>
        <IconButton>
          <ShoppingBag size={24} color={colors.black} />
        </IconButton>
        <SecondaryButton>Войти</SecondaryButton>
        <MainButton>заказываете сейчас</MainButton>
      </ButtonContainer>
    </Container>
  );
};

export { Navbar };
