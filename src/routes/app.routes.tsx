import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { RegisterLoginData } from "../screens/RegisterLoginData";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="home"
    >
      <Screen name="home" component={Home} />

      <Screen name="registerLoginData" component={RegisterLoginData} />
    </Navigator>
  );
}
