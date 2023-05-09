import { Text, View } from "native-base";
import { StyleSheet } from "react-native";


const ExerciseScreen = () => {

    return (
        <View style={ styles.container }>
            <Text>This is exercise screen</Text>
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