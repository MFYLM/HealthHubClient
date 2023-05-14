import { Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { StackScreenProps } from "../../navigation/Navigation";


const ExerciseScreen = ({ navigation }: StackScreenProps<"Exercise">) => {

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