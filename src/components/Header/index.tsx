import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  AboutUser,
  Avatar,
  TextContainer,
  HelloMessage,
  BoldText,
  SecondaryMessage,
  Icon,
  Title,
} from "./styles";

type HeaderProps = {
  user?: {
    name: string;
    avatar_url: string;
  };
};

export function Header({ user }: HeaderProps) {
  const { navigate, goBack } = useNavigation();

  function handleAddPass() {
    navigate("registerLoginData");
  }

  return (
    <Container>
      {user ? (
        <>
          <AboutUser>
            <Avatar source={{ uri: user.avatar_url }} />

            <TextContainer>
              <HelloMessage>
                Olá, <BoldText>{user.name}</BoldText>
              </HelloMessage>

              <SecondaryMessage>Sinta-se seguro aqui</SecondaryMessage>
            </TextContainer>
          </AboutUser>

          <TouchableOpacity activeOpacity={0.7} onPress={handleAddPass}>
            <Icon name="plus" />
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity activeOpacity={0.7} onPress={goBack}>
            <Icon name="chevron-left" />
          </TouchableOpacity>

          <Title>Cadastro de senha</Title>
        </>
      )}
    </Container>
  );
}
