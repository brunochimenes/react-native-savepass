import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import Feather from "@expo/vector-icons/Feather";

export const Container = styled.View`
  flex-direction: row;
  height: 56px;

  margin-top: -18px;
`;

export const Input = styled(TextInput)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  font-family: ${({ theme }) => theme.FONT_FAMILY.LIGHT};
  ${({ theme }) => css`
    font-size: ${RFValue(theme.FONT_SIZE.MD)}px;
  `}

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  padding: 0 20px;
`;

export const Button = styled.Pressable`
  background: ${({ theme }) => theme.COLORS.YELLOW};

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 16px;
`;

export const Icon = styled(Feather).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.BLUE,
}))``;
