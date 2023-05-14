import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DietScreen from "../screens/diet/DietScreen";
import ExerciseScreen from "../screens/exercise/ExerciseScreen";
import MainScreen from "../screens/main/MainScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import SleepScreen from "../screens/sleep/SleepScreen";
import { RootStackParamList } from "./StackNavigator";


export type RootTabParamList = {
    Main: undefined;
    Sleep: undefined;
    Exercise: undefined;
    Diet: undefined;
    Profile: undefined;
};


/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */


// Notice: add new screen in here to display them
const Tab = createBottomTabNavigator<RootTabParamList>();

const TabNavigator = ({ navigation }: NativeStackScreenProps<RootStackParamList, 'Root'>) => {
    const insets = useSafeAreaInsets();

    return (
        <Tab.Navigator
            initialRouteName="Main"
            screenOptions={{
                headerShown: false
            }}
            safeAreaInsets={insets}
        >
            <Tab.Screen
                key="Main"
                name="Main"
                component={MainScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                key="Sleep"
                name="Sleep"
                component={SleepScreen}
                options={{
                    tabBarLabel: "Sleep",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="sleep" color={color} size={size} />
                    )
                }}
            />

            <Tab.Screen
                key="Exercise"
                name="Exercise"
                component={ExerciseScreen}
                options={{
                    tabBarLabel: "Exercise",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="run" color={color} size={size} />
                    )
                }}
            />

            <Tab.Screen
                key="Diet"
                name="Diet"
                component={DietScreen}
                options={{
                    tabBarLabel: "Diet",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="silverware-fork-knife" color={color} size={size} />
                    )
                }}
            />

            <Tab.Screen
                key="Profile"
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    );
};


export default TabNavigator;

const styles = StyleSheet.create({
    topBarStyle: {
        
    }
});