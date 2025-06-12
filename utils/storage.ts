import { StorageKey } from '@/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async <T>(key: string, value: T): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(StorageKey.PROJECTS + key, jsonValue);
  } catch (e) {
    console.error('Failed to save data');
    throw e;
  }
}

export const loadData = async <T>(key: string): Promise<T | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(StorageKey.PROJECTS + key);
    return jsonValue != null ? JSON.parse(jsonValue) as T : null;
  } catch (e) {
    console.error('Failed to load data');
    throw e;
  }
}

export const removeData = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(StorageKey.PROJECTS + key);
  } catch (e) {
    console.error('Failed to remove data');
    throw e;
  }
}
