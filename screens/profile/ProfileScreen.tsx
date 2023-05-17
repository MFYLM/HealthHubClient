import { Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { StackScreenProps } from "../../navigation/Navigation";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { RootTabParamList } from "../../navigation/TabNavigator";


interface ProfileScreenNavigationProp<ScreenParams extends ParamListBase> {
    navigation: NavigationProp<ScreenParams>
};


const ProfileScreen = ({ navigation }: ProfileScreenNavigationProp<RootTabParamList>) => {

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