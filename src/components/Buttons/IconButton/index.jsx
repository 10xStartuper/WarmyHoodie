import React from "react";
import styled from "styled-components";
import { colors } from "../../../configs";

const Container = styled.div`
  max-width: 48px;
  max-height: 48px;
  padding: 12px;
  background-color: ${colors.lightWhite};
  color: ${colors.black};
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${colors.main};
  }
`;

const IconButton = ({ children }) => {
  return <Container>{children}</Container>;
};

export { IconButton };
