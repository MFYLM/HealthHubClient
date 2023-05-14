import { Text } from "react-native-paper";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { StackScreenProps } from "../../navigation/Navigation";


const SleepScreen = ({ navigation }: StackScreenProps<"Sleep">) => {

    return (
        <View style={styles.container}>
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