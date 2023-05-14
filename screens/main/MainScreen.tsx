import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import TopBar from "../../components/TopBar";
import { RootTabParamList } from "../../navigation/TabNavigator";


interface MainScreenNavigationProp<ScreenParams extends ParamListBase> {
    navigation: NavigationProp<ScreenParams>
};


const MainScreen = ({ navigation }: MainScreenNavigationProp<RootTabParamList>) => {


    return (
        <View style={styles.container}>
            <TopBar username="Fake User" section="main" navigation={navigation} />
            <View style={{ }}>
                <Text>
                    This is the main screen
                </Text>
            </View>
        </View>
    );
};


export default MainScreen;


// add style here
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    }
});