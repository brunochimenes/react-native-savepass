import { useCallback, useEffect, useState } from "react";
import { StatusBar, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import {
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_500Medium,
} from "@expo-google-fonts/rubik";

import theme from "./src/theme";

import { Routes } from "./src/routes";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  async function prepare() {
    try {
      await SplashScreen.preventAutoHideAsync();

      await Font.loadAsync({
        Rubik_300Light,
        Rubik_400Regular,
        Rubik_500Medium,
      });
    } catch (e) {
      console.warn(e);
    } finally {
      setAppIsReady(true);
    }
  }

  useEffect(() => {
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />

        <Routes />
      </ThemeProvider>
    </View>
  );
}
