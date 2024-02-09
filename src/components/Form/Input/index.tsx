import { useState } from "react";
import { TextInputProps } from "react-native";

import {
  Container,
  Label,
  Error,
  InputContainer,
  FormInput,
  ToggleShowPassButton,
  Icon,
} from "./styles";

type InputProps = TextInputProps & {
  title: string;
  error?: string;
};

export function Input({ title, error, secureTextEntry, ...rest }: InputProps) {
  const [passwordHidden, setPasswordHidden] = useState(true);

  return (
    <Container>
      <Label>{title}</Label>

      <InputContainer>
        <FormInput
          secureTextEntry={secureTextEntry && passwordHidden}
          {...rest}
        />
        {secureTextEntry && (
          <ToggleShowPassButton
            onPress={() => setPasswordHidden(!passwordHidden)}
          >
            <Icon name={passwordHidden ? "eye-off" : "eye"} />
          </ToggleShowPassButton>
        )}
      </InputContainer>

      {error && <Error>{error}</Error>}
    </Container>
  );
}
