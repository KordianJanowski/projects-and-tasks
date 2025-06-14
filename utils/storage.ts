import { StorageKey } from '@/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async <T>(key: StorageKey, value: T): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('Failed to save data');
    throw e;
  }
}

export const loadData = async <T>(key: StorageKey): Promise<T | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) as T : null;
  } catch (e) {
    console.error('Failed to load data');
    throw e;
  }
}

export const removeData = async (key: StorageKey): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error('Failed to remove data');
    throw e;
  }
}
