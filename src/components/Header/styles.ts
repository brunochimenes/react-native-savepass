import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";

export const Container = styled(SafeAreaView)`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BLUE};

  padding: 24px;
`;

export const AboutUser = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;

  border-radius: 32px;
`;

export const TextContainer = styled.View`
  margin-left: 16px;
`;

export const HelloMessage = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  ${({ theme }) => css`
    font-size: ${RFValue(theme.FONT_SIZE.LG)}px;
  `}
`;

export const BoldText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  ${({ theme }) => css`
    font-size: ${RFValue(theme.FONT_SIZE.LG)}px;
  `}
`;

export const SecondaryMessage = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  ${({ theme }) => css`
    font-size: ${RFValue(theme.FONT_SIZE.SM)}px;
  `}
`;

export const Icon = styled(Feather).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_100,
  size: 24,
}))``;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  ${({ theme }) => css`
    font-size: ${RFValue(theme.FONT_SIZE.XL)}px;
  `}

  margin: auto;
`;
