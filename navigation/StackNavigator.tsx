import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NotFoundScreen from "../screens/NotFound";
import TabNavigator from "./TabNavigator";
import RecommendDetail from "../screens/main/RecommendDetail";
import { NavigationProp } from "@react-navigation/native";

// add screens here to allow user to navigate through
export type RootStackParamList = {
    Root: undefined;
    NotFound: undefined;
    RecommendDetail: { category: string };
};

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();


const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Root" component={TabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="NotFound" component={NotFoundScreen}  options={{ headerShown: false }} />
            <Stack.Screen name="RecommendDetail" component={RecommendDetail} options={{ headerShown: false, presentation: "modal" }}/>

        </Stack.Navigator>
    );
}


export default StackNavigator;