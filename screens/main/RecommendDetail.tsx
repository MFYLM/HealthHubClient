import { NavigationProp, ParamListBase, RouteProp, useNavigation } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import { RootStackParamList } from "../../navigation/StackNavigator";
import { Appbar, Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";


interface RecommendDetailNavigationProp<ScreenParams extends ParamListBase> {
    navigation: NavigationProp<ScreenParams>
};

type RecommendDetailRouteProp = RouteProp<RootStackParamList, 'RecommendDetail'>;


const RecommendDetail = ({ route }: { route: RecommendDetailRouteProp }) => {
    const insets = useSafeAreaInsets();

    const { category } = route.params;
    // const { navigation } = route.params;


    return (
        <View style={{ top: insets.top, alignItems: "center" }}>
            <View>
                <Text>Your {category} routine should be like following...</Text>
            </View>
        </View>
    );
};

export default RecommendDetail;


const styles = StyleSheet.create({
    container: {

    }
});