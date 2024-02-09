import { useState } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import {
  Container,
  InfoContainer,
  Icon,
  Title,
  Password,
  LoginContainer,
  Email,
} from "./styles";

type LoginDataItemProps = TouchableOpacityProps & {
  service_name: string;
  email: string;
  password: string;
};

export function LoginDataItem({
  service_name,
  email,
  password,
  ...rest
}: LoginDataItemProps) {
  const [isVisible, setIsVisible] = useState(false);

  function handleTogglePassIsVisible() {
    setIsVisible(!isVisible);
  }

  return (
    <Container isVisible={isVisible}>
      <InfoContainer>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleTogglePassIsVisible}
        >
          <Icon name={isVisible ? "eye" : "eye-off"} isVisible={isVisible} />
        </TouchableOpacity>

        <LoginContainer>
          <Title isVisible={isVisible}>{service_name}</Title>

          {isVisible ? <Password>{password}</Password> : <Email>{email}</Email>}
        </LoginContainer>
      </InfoContainer>

      <TouchableOpacity activeOpacity={0.7} {...rest}>
        <Icon name="trash" isVisible={isVisible} />
      </TouchableOpacity>
    </Container>
  );
}
