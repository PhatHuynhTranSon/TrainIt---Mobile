import AsyncStorage from "@react-native-async-storage/async-storage";


export const setToken = async (token) => {
    await AsyncStorage.setItem("token", token);
}

export const getToken = async () => {
    const token = await AsyncStorage.getItem("token");
    return token;
}

export const isLoggedIn = async() => {
    const token = getToken();
    return token !== null;
}