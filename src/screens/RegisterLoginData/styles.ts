import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};

  padding: 0 24px;
`;

export const Form = styled.View`
  margin-top: 24px;
`;
