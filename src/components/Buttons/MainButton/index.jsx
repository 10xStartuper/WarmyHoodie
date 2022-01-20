import React from "react";
import styled from "styled-components";
import { colors } from "../../../configs";

const Container = styled.div`
  transition: all 0.2s ease-in-out;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
  text-transform: capitalize;
  color: ${colors.white};
  background: ${colors.black};
  padding: 14px 20px;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${colors.main};
    color: ${colors.black};
  }
`;

const MainButton = ({ children }) => {
  return <Container>{children}</Container>;
};

export { MainButton };
