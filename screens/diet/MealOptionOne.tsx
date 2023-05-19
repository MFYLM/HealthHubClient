import { Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { NavigationProp, ParamListBase, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/StackNavigator";
import { useRoute } from "@react-navigation/native";


interface MealDetailScreenNavigationProp<ScreenParams extends ParamListBase> {
    navigation: NavigationProp<ScreenParams>
};

// the name of route prop only needs to go along with scree name
type MealDetailScreenRouteProp = RouteProp<RootStackParamList, 'MealOptionOne'>;


const MealOptionOne = ({ route, navigation }: { navigation: MealDetailScreenNavigationProp<RootStackParamList>; route: MealDetailScreenRouteProp }) => {
    const { name } = route.params;

    // using route.params to access the parameters passed in

    return (
        <View style={ styles.container }>
            <Text>This is the first meal option screen</Text>
            <Text>meal name: {name}</Text>
        </View>
    );
};


export default MealOptionOne;


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
    }
});