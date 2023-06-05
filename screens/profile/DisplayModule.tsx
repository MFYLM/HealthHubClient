import { SetStateAction, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import SwitchTab, { btnStruct } from "../../components/SwitchTab";
import AnalysisDisplay from "./StatisticDisplay";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TopBar from "../../components/TopBar";
import { Appbar, Text } from "react-native-paper";
import { RootStackParamList } from "../../navigation/StackNavigator";
import { NavigationProp, ParamListBase, RouteProp, useNavigation } from "@react-navigation/native";


interface DisplayModuleProps {
    moduleName: string;
};

type DisplayModuleRouteProp = RouteProp<RootStackParamList, 'DisplayModule'>;

// TODO: create map for data retrieving
// const dataRangeMap = new Map<string, SetStateAction<any>>(
//     ["D", set]
// );


const pageMap = new Map<string, string>([
    ["Walking + Running Distance", ""]
]);

const DisplayModule = ({ route }: { route: DisplayModuleRouteProp }) => {
    const { moduleName } = route.params;

    const insets = useSafeAreaInsets();
    const [buttons, setButttons] = useState<btnStruct[]>([
        {
            value: "day",
            label: "D",
        },
        {
            value: "week",
            label: "W",
        },
        {
            value: "month",
            label: "M",
        },
        {
            value: "6month",
            label: "6M",
        },
        {
            value: "year",
            label: "Y",
        },
    ]);
    const [value, setValue] = useState("D");
    const [labels, setLabels] = useState(["January", "February", "March", "April", "May", "June"]);
    const [data, setData] = useState([
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100
    ]);
    const navigation = useNavigation();


    return (
        <View style={{ flex: 1, flexDirection: "column", top: insets.top }}>
            <Appbar style={{ top: 0, borderBottomWidth: 1, backgroundColor: "white", borderBottomColor: "black" }}>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content style={{ alignItems: "center", marginRight: 8 }} title={moduleName} />
            </Appbar>
            <ScrollView>
                <SwitchTab
                    value={value}
                    setValue={setValue}
                    buttonStructure={buttons}
                />
                <AnalysisDisplay
                    charType="line"
                    labels={labels}
                    data={data
                    }
                />
            </ScrollView>
        </View>
    );
};


export default DisplayModule;


const style = StyleSheet.create({
    container: {
        
    }
});