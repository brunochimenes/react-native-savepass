import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

import {
  Container,
  Metadata,
  Title,
  TotalPassCount,
  LoginList,
  LoginDataProps,
} from "./styles";

import { loginsGetAll } from "../../storage/loginsGetAll";
import { loginRemove } from "../../storage/loginRemove";

import { Header } from "../../components/Header";
import { SearchBar } from "../../components/SearchBar";
import { LoginDataItem } from "../../components/LoginDataItem";

type LoginListDataProps = LoginDataProps[];

export function Home() {
  const [searchText, setSearchText] = useState("");
  const [searchListData, setSearchListData] = useState<LoginListDataProps>([]);
  const [data, setData] = useState<LoginListDataProps>([]);

  async function loadData() {
    const loginsData = await loginsGetAll();

    setSearchListData(loginsData);

    setData(loginsData);
  }

  async function loginIdRemove(loginId: string) {
    await loginRemove(loginId);

    loadData();
  }

  function handleFilterLoginData() {
    const filteredData = searchListData.filter((data) => {
      const isValid = data.service_name
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase());

      if (isValid) {
        return data;
      }
    });

    setSearchListData(filteredData);
  }

  function handleChangeInputText(text: string) {
    if (!text) {
      setSearchListData(data);
    }

    setSearchText(text);
  }

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  return (
    <>
      <Header
        user={{
          name: "Bruno Chimenes",
          avatar_url: "https://github.com/brunochimenes.png",
        }}
      />

      <Container>
        <SearchBar
          placeholder="Qual senha você procura?"
          onChangeText={handleChangeInputText}
          value={searchText}
          returnKeyType="search"
          onSubmitEditing={handleFilterLoginData}
          onSearchButtonPress={handleFilterLoginData}
        />

        <Metadata>
          <Title>Suas senhas</Title>

          <TotalPassCount>
            {searchListData.length
              ? `${`${searchListData.length}`.padStart(2, "0")} ao total`
              : "Nada a ser exibido"}
          </TotalPassCount>
        </Metadata>

        <LoginList
          data={searchListData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <LoginDataItem
                service_name={item.service_name}
                email={item.email}
                password={item.password}
                onPress={() => loginIdRemove(item.id)}
              />
            );
          }}
          contentContainerStyle={[{ paddingBottom: 100 }]}
        />
      </Container>
    </>
  );
}
