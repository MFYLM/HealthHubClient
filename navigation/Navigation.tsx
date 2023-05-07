import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as Linking from 'expo-linking';
import { useColorScheme } from 'react-native';
import StackNavigator, { RootStackParamList } from './StackNavigator';
import { RootTabParamList } from './TabNavigator';


export type StackScreenProps<
    RouteName extends keyof (RootTabParamList & RootStackParamList)
> = NativeStackScreenProps<RootTabParamList & RootStackParamList, RouteName>;

const Navigation = () => {
    return (
        <NavigationContainer linking={linking} >
            <StackNavigator />
        </NavigationContainer>
    );
}

export default Navigation;

//The routes/links for each screen
const linking = {
    prefixes: [Linking.createURL('/')],
    Root: {
        screens: {
            Main: {
                screens: {
                    MainScreen: 'main',
                },
            },
            Sleep: {
                screens: {
                    SleepScreen: "sleep",
                },
            },
            Exercise: {
                screens: {
                    ExerciseScreen: "exercise",
                },
            },
            Diet: {
                screens: {
                    DietScreen: "diet",
                },
            },
        },
    },
    NotFound: '*',
};

