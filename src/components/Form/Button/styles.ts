import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  height: 56px;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.YELLOW};

  border-radius: 4px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE};

  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  ${({ theme }) => css`
    font-size: ${RFValue(theme.FONT_SIZE.MD)}px;
  `};
`;
