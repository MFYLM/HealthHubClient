import { useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";
import { StyleSheet, View, Keyboard, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/StackNavigator";


interface LoginScreenNavigationProp<ScreenParams extends ParamListBase> {
    navigation: NavigationProp<ScreenParams>
};

const LoginScreen = ({ navigation }: LoginScreenNavigationProp<RootStackParamList>) => {
    const insets = useSafeAreaInsets();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



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
                    style={{ backgroundColor: "white"}}
                />
                <TextInput 
                    label={"Password"}
                    value={password}
                    onChangeText={(text) => setEmail(text)}
                    style={{ backgroundColor: "white" }}
                    onBlur={ Keyboard.dismiss }
                />
                <View style={{ marginVertical: 10 }}>
                    <Button 
                        mode="outlined" 
                        labelStyle={{ fontSize: 20 }} 
                        onPress={() => navigation.navigate("Root")} 
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