import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NotFoundScreen from "../screens/NotFound";
import TabNavigator from "./TabNavigator";
import RecommendDetail from "../screens/main/RecommendDetail";
import { NavigationProp } from "@react-navigation/native";
import DisplayModule from "../screens/profile/DisplayModule";
import UserDetail, { UserInfo } from "../screens/profile/UserDetail";


// add screens here to allow user to navigate through
export type RootStackParamList = {
    Root: undefined;
    NotFound: undefined;
    RecommendDetail: { category: string };
    DisplayModule: { moduleName: string };
    UserDetail: { user: UserInfo }
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
            <Stack.Screen name="DisplayModule" component={DisplayModule} options={{ headerShown: false, animation: "slide_from_left" }} />
            <Stack.Screen name="UserDetail" component={UserDetail} options={{ headerShown: false, animation: "slide_from_left" }} />
        </Stack.Navigator>
    );
}


export default StackNavigator;