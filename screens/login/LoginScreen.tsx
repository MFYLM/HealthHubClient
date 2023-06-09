import { useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";
import { StyleSheet, View, Keyboard, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/StackNavigator";
import { UserLoginInput, UserSessionData } from "../../apiInterfaces";
import { loginUser } from "../../apiFunctions";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { storeSession } from "../../utils/helpers/session";


interface LoginScreenNavigationProp<ScreenParams extends ParamListBase> {
    navigation: NavigationProp<ScreenParams>
};

const LoginScreen = ({ navigation }: LoginScreenNavigationProp<RootStackParamList>) => {
    const insets = useSafeAreaInsets();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(true);

    const handleLogin = async () => {
        let userinput: UserLoginInput = {
            email: email,
            password: password,
        };

        const res: UserSessionData = await loginUser(userinput);

        // if (res.sessionId === "" || res.userId === "") {
        //     console.log("invalid password or email combination!");
        // }
        // else {
        //     await storeSession(res);
        navigation.navigate("Root");
        // }
    };


    return (
        <ScrollView
            contentContainerStyle={{ flex: 1, gap: 60, alignItems: "center", justifyContent: "center", top: insets.top }}
            scrollEnabled={false}
        >
            <Text style={{ fontSize: 20 }}>Weclome to Your Personal Health Hub!</Text>
            <View style={{ width: "80%" }}>
                <TextInput
                    label={"Email"}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    style={{ backgroundColor: "white" }}
                />
                <TextInput
                    secureTextEntry={isShowPassword}
                    right={
                        <TextInput.Icon
                            icon={() => <MaterialCommunityIcons name={isShowPassword ? "eye-off" : "eye"} size={20} />}
                            onPress={() => { isShowPassword ? setIsShowPassword(false) : setIsShowPassword(true) }}
                        />
                    }
                    label={"Password"}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    style={{ backgroundColor: "white" }}
                    onBlur={Keyboard.dismiss}
                />
                <View style={{ marginVertical: 10 }}>
                    <Button
                        mode="outlined"
                        labelStyle={{ fontSize: 20 }}
                        onPress={handleLogin}
                    >
                        Log In
                    </Button>
                </View>
            </View>
        </ScrollView>
    );
};


export default LoginScreen;


const styles = StyleSheet.create({

});