import { KeyboardAvoidingView, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { Container, Form } from "./styles";

import { loginCreate, FormData } from "../../storage/loginCreate";

import { Header } from "../../components/Header";
import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";

const schema = Yup.object().shape({
  service_name: Yup.string().required("Nome do serviço é obrigatório!"),
  email: Yup.string()
    .email("Não é um email válido")
    .required("Email é obrigatório!"),
  password: Yup.string().required("Senha é obrigatória!"),
});

export function RegisterLoginData() {
  const { navigate } = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  async function handleRegister(formData: FormData) {
    await loginCreate(formData);

    navigate("home");
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      enabled
    >
      <Header />

      <Container>
        <Form>
          <Controller
            name="service_name"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                title="Nome do serviço"
                placeholder="Digite o nome do serviço"
                onChangeText={onChange}
                value={value}
                error={errors.service_name && errors.service_name.message}
                autoCapitalize="sentences"
                autoCorrect
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                title="E-mail ou usuário"
                placeholder="Digite seu e-mail ou usuário"
                onChangeText={onChange}
                value={value}
                error={errors.email && errors.email.message}
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                title="Senha"
                placeholder="Digite sua senha"
                onChangeText={onChange}
                value={value}
                error={errors.password && errors.password.message}
                secureTextEntry
              />
            )}
          />

          <Button
            style={{
              marginTop: 8,
            }}
            title="Salvar"
            onPress={handleSubmit(handleRegister)}
          />
        </Form>
      </Container>
    </KeyboardAvoidingView>
  );
}
