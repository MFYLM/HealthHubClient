import { Text, View } from "native-base";
import { StyleSheet } from "react-native";


const DietScreen = () => {

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