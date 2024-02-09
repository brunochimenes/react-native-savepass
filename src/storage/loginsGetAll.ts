import AsyncStorage from "@react-native-async-storage/async-storage";

import { LOGIN_COLLECTION } from "./storageConfig";

export async function loginsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(LOGIN_COLLECTION);

    const logins = storage ? JSON.parse(storage) : [];

    return logins;
  } catch (error) {
    throw error;
  }
}
