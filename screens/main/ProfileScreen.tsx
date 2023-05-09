import { Text, View } from "native-base";
import { StyleSheet } from "react-native";


const ProfileScreen = () => {

    return (
        <View style={ styles.container }>
            <Text>This is the profile screen</Text>
        </View>
    );
};


export default ProfileScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
    }
});