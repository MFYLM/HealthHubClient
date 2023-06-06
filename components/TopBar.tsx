import { View } from "react-native";
import { TimeString, timeToString } from "../utils/helpers/time";
import { Appbar } from "react-native-paper";
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { RootTabParamList } from "../navigation/TabNavigator";
import { RootStackParamList } from "../navigation/StackNavigator";

interface TopBarProps<ScreenParams extends ParamListBase> {
    username: string,
    section: string,
    isTop: boolean,
    navigation: NavigationProp<ScreenParams>
};


const TopBar = (props: TopBarProps<RootStackParamList> | TopBarProps<RootTabParamList>) => {
    const { username, section, isTop, navigation } = props;

    const curTime: TimeString = timeToString(new Date());

    return (
        <Appbar.Header>
            { !isTop ? <Appbar.BackAction onPress={() => navigation.goBack()} /> : <></> }
            <Appbar.Content title={`Good ${curTime.hours}, ${username}`} />
        </Appbar.Header>
    );
};


export default TopBar;