import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";


// add screens here to allow user to navigate through
export type RootStackParamList = {
    Root: undefined;
    NotFound: undefined;
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
        </Stack.Navigator>
    );
}


export default StackNavigator;