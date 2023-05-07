import { StyleSheet, Text } from "react-native";
import { Box, View } from "native-base";


const MainScreen = () => {

    return (
        <View style={ styles.container }>
            <Text>
                This is the main screen
            </Text>
        </View>
    );
};


export default MainScreen;


// add style here
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
    }
});