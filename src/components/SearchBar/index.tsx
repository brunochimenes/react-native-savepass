import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import { Container, Input, Button, Icon } from "./styles";

type SearchBarProps = TextInputProps & {
  onSearchButtonPress: () => void;
};

export function SearchBar({
  style,
  onSearchButtonPress,
  ...rest
}: SearchBarProps) {
  const { COLORS } = useTheme();

  return (
    <Container>
      <Input {...rest} />

      <Button onPress={onSearchButtonPress}>
        <Icon name="search" />
      </Button>
    </Container>
  );
}
