import { Text, View } from "native-base";
import { StyleSheet } from "react-native";


const SleepScreen = () => {

    return (
        <View style={ styles.container }>
            <Text>This is sleep screen</Text>
        </View>
    );
};


export default SleepScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
    }
});