import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./StackNavigator";
import MainScreen from "../screens/main/MainScreen";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SleepScreen from "../screens/main/SleepScreen";
import { Icon, useSafeArea } from "native-base";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ExerciseScreen from "../screens/main/ExerciseScreen";
import DietScreen from "../screens/main/DietScreen";
import ProfileScreen from "../screens/main/ProfileScreen";

import Ionicons from 'react-native-vector-icons/Ionicons';      // Seems to work on the application without error?


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
    container: {

    }
});