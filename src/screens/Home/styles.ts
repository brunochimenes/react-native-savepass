import { FlatList, FlatListProps } from "react-native";
import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export type LoginDataProps = {
  id: string;
  service_name: string;
  email: string;
  password: string;
};

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};

  padding: 0 24px;
`;

export const Metadata = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 32px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  ${({ theme }) => css`
    font-size: ${RFValue(theme.FONT_SIZE.MD)}px;
  `}
`;

export const TotalPassCount = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  ${({ theme }) => css`
    font-size: ${RFValue(theme.FONT_SIZE.SM)}px;
  `}
`;

export const LoginList = styled(
  FlatList as new (
    props: FlatListProps<LoginDataProps>
  ) => FlatList<LoginDataProps>
).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 16px;
`;
