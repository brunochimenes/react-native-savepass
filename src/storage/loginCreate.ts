import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

import { LOGIN_COLLECTION } from "./storageConfig";

export type FormData = {
  service_name: string;
  email: string;
  password: string;
};

export async function loginCreate(formData: FormData) {
  try {
    const newLoginData = {
      id: String(uuid.v4()),
      ...formData,
    };

    const storage = await AsyncStorage.getItem(LOGIN_COLLECTION);

    const logins = storage ? JSON.parse(storage) : [];

    const loginListData = [...logins, newLoginData];

    await AsyncStorage.setItem(LOGIN_COLLECTION, JSON.stringify(loginListData));
  } catch (error) {
    throw error;
  }
}
