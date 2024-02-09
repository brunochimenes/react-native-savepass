import { TouchableOpacityProps } from "react-native";

import { Container, ButtonText } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
};

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      <ButtonText>{title}</ButtonText>
    </Container>
  );
}
