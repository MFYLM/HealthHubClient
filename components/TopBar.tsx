import { View } from "react-native";
import { TimeString, timeToString } from "../utils/helpers/time";
import { Appbar } from "react-native-paper";
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { RootTabParamList } from "../navigation/TabNavigator";

interface TopBarProps<ScreenParams extends ParamListBase> {
    username: string,
    section: string,
    isTop: boolean,
    navigation: NavigationProp<ScreenParams>
};


const TopBar = (props: TopBarProps<RootTabParamList>) => {
    const { username, section, isTop, navigation } = props;

    const curTime: TimeString = timeToString(new Date());

    return (
        <Appbar.Header>
            { !isTop ? <Appbar.BackAction onPress={() => {}} /> : <></>}
            <Appbar.Content title={`Good ${curTime.day}, ${username}`} />
            <Appbar.Action icon="calendar" onPress={() => console.log("access calendar view")} />
        </Appbar.Header>
    );
};


export default TopBar;