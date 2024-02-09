import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import Feather from "@expo/vector-icons/Feather";

export const Container = styled.View`
  margin-bottom: 17px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  ${({ theme }) => css`
    font-size: ${RFValue(theme.FONT_SIZE.SM)}px;
  `}

  margin-bottom: 7px;
`;

export const Error = styled.Text`
  color: ${({ theme }) => theme.COLORS.DANGER};

  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  ${({ theme }) => css`
    font-size: ${RFValue(theme.FONT_SIZE.XS)}px;
  `}

  margin-top: 4px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 56px;
  align-items: center;

  background: ${({ theme }) => theme.COLORS.GRAY_100};

  border: solid ${({ theme }) => theme.COLORS.GRAY_200} 1px;
  border-radius: 4px;
  padding: 0 20px;
`;

export const FormInput = styled(TextInput)`
  flex: 1;
  height: 100%;

  color: ${({ theme }) => theme.COLORS.GRAY_400};

  font-family: ${({ theme }) => theme.FONT_FAMILY.LIGHT};
  ${({ theme }) => css`
    font-size: ${RFValue(theme.FONT_SIZE.MD)}px;
  `}
`;

export const ToggleShowPassButton = styled.Pressable`
  margin-left: 20px;
`;

export const Icon = styled(Feather).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_300,
}))`
  opacity: 0.6;
`;
