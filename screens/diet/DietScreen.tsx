import { Text, Button } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { RootTabParamList } from "../../navigation/TabNavigator";


interface DietScreenNavigationProp<ScreenParams extends ParamListBase> {
    navigation: NavigationProp<ScreenParams>
};


const DietScreen = ({ navigation }: DietScreenNavigationProp<RootTabParamList>) => {

    return (
        <View style={ styles.container }>
            <Text>This is the diet screen</Text>
            <Button mode="contained" onPress={() => navigation.navigate('MealOptionOne', { name: "abc" })}>
        Go to first meal option
      </Button>
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