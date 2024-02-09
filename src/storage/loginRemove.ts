import AsyncStorage from "@react-native-async-storage/async-storage";

import { loginsGetAll } from "./loginsGetAll";

import { LOGIN_COLLECTION } from "./storageConfig";

export async function loginRemove(loginId: string) {
  try {
    const storage = await loginsGetAll();

    const filtered = storage.filter(
      (login: { id: string }) => login.id !== loginId
    );

    const logins = JSON.stringify(filtered);

    await AsyncStorage.setItem(LOGIN_COLLECTION, logins);
  } catch (error) {
    throw error;
  }
}
