import { Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { RootTabParamList } from "../../navigation/TabNavigator";


interface ExerciseScreenNavigationProp<ScreenParams extends ParamListBase> {
    navigation: NavigationProp<ScreenParams>
};


const ExerciseScreen = ({ navigation }: ExerciseScreenNavigationProp<RootTabParamList>) => {

    return (
        <View style={ styles.container }>
            <Text>This is the exercise screen</Text>
        </View>
    );
};


export default ExerciseScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
    }
});