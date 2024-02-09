import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import Feather from "@expo/vector-icons/Feather";

type StylesProps = {
  isVisible: boolean;
};

export const Container = styled.View<StylesProps>`
  flex-direction: row;
  min-height: 80px;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme, isVisible }) =>
    isVisible ? theme.COLORS.BLUE_LIGHT : theme.COLORS.GRAY_100};

  margin-bottom: 8px;
  border-radius: 4px;
  padding: 24px;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather).attrs<StylesProps>(
  ({ theme, isVisible }) => ({
    color: isVisible ? theme.COLORS.BLUE : theme.COLORS.GRAY_300,
    size: 24,
  })
)``;

export const LoginContainer = styled.View`
  max-width: 220px;

  margin-left: 20px;
`;

export const Title = styled.Text<StylesProps>`
  color: ${({ theme, isVisible }) =>
    isVisible ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_400};

  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  ${({ theme, isVisible }) => css`
    font-size: ${RFValue(
      isVisible ? theme.FONT_SIZE.MD : theme.FONT_SIZE.MD
    )}px;
  `}

  margin-bottom: 4px;
`;

export const Password = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE};

  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  ${({ theme }) => css`
    font-size: ${RFValue(theme.FONT_SIZE.MD)}px;
  `}
`;

export const Email = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  ${({ theme }) => css`
    font-size: ${RFValue(theme.FONT_SIZE.SM)}px;
  `}
`;
