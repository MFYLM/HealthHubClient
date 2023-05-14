import { Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { StackScreenProps } from "../../navigation/Navigation";


const DietScreen = ({ navigation }: StackScreenProps<"Diet">) => {

    return (
        <View style={ styles.container }>
            <Text>This is the diet screen</Text>
        </View>
    );
};


export default DietScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
    }
});