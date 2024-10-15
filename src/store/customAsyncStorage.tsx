// customAsyncStorage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const customAsyncStorage = {
  setItem: async (name : string, value : any) => {
    await AsyncStorage.setItem(name, JSON.stringify(value)); // Convert value to string
  },
  getItem: async (name : string) => {
    const value = await AsyncStorage.getItem(name);
    return value ? JSON.parse(value) : null; // Parse value from string to JSON
  },
  removeItem: async (name : string) => {
    await AsyncStorage.removeItem(name);
  },
};

export default customAsyncStorage;
