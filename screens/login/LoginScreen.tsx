import { useState } from "react";
import { Text, TextInput } from "react-native-paper";
import { StyleSheet, View } from "react-native";


const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <View>
            <Text>Welcome to Your Personal Health Hub!</Text>
            <TextInput 
                label={"Email"}
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput 
                label={"Password"}
                value={password}
                onChangeText={(text) => setEmail(text)}
            />
        </View>
    );
};



export default LoginScreen;


const styles = StyleSheet.create({

});