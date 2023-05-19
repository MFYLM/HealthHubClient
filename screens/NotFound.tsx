import { View, StyleSheet } from "react-native";
import ScreenView from "../components/ScreenView";
import { Text } from "react-native-paper";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/StackNavigator";


interface NotFoundScreenNavigationProp<ScreenParams extends ParamListBase> {
    navigation: NavigationProp<ScreenParams>
};

const NotFoundScreen = ({ navigation }: NotFoundScreenNavigationProp<RootStackParamList>) => {


    return (
        <View>
            <Text>Can't found informaiton</Text>
        </View>
    );
};


export default NotFoundScreen;


const styles = StyleSheet.create({
    container: {

    }
});