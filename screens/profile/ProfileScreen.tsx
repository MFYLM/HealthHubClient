import { Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { StackScreenProps } from "../../navigation/Navigation";


const ProfileScreen = ({ navigation }: StackScreenProps<"Profile">) => {

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