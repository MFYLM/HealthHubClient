import { Text } from "react-native-paper";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { StackScreenProps } from "../../navigation/Navigation";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { RootTabParamList } from "../../navigation/TabNavigator";


interface SleepScreenNavigationProp<ScreenParams extends ParamListBase> {
    navigation: NavigationProp<ScreenParams>
};


const SleepScreen = ({ navigation }: SleepScreenNavigationProp<RootTabParamList>) => {

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