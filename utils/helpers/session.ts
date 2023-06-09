import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserSessionData } from "../../apiInterfaces";


export const storeSession = (params: UserSessionData) => async () => {
    const { sessionId, userId } = params;

    try {
        await AsyncStorage.setItem(
            'session-id',
            sessionId,
        );

        await AsyncStorage.setItem(
            'user-id',
            userId,
        );
    } catch (error) {
        // Error saving data
        console.log("store session error: ", error);
    }

};


export const getSession = async () => {
    let result : UserSessionData = { sessionId: "", userId: "" };

    try {
        const sessionId = await AsyncStorage.getItem("session-id");
        const userId = await AsyncStorage.getItem("user-id");

        result.sessionId = sessionId!;
        result.userId = userId!;
    } catch (error) {
        console.log("access session error: ", error);
    }
    
    return result;
};