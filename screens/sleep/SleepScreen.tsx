import { NavigationProp, ParamListBase } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Dimensions, LayoutAnimation, RefreshControl, ScrollView, StyleSheet, View } from "react-native";
import CircularProgressWithLegend from "../../components/sleep/CircularProgressWithLegend";
import { Card, Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RootTabParamList } from "../../navigation/TabNavigator";
import { timeToString } from "../../utils/helpers/time";
import { useQuery } from "react-query";
import { fetchPlanData } from "../../apiFunctions";
import { User1 } from "../../utils/samples/sampleUsers";
import { PlanData } from "../../apiInterfaces";
// import { Colors } from 'react-native/Libraries/NewAppScreen';


interface SleepScreenNavigationProp<ScreenParams extends ParamListBase> {
    navigation: NavigationProp<ScreenParams>
};


const SleepScreen = ({ navigation }: SleepScreenNavigationProp<RootTabParamList>) => {
    const insets = useSafeAreaInsets();
    const session = User1.session;
    const timeString = timeToString(new Date());
    const [refreshing, setRefreshing] = useState(false);
    const [planData, setPlanData] = useState<PlanData>({ scoreDenominator: 1, scoreNumerator: 0 });


    const { refetch: reFetchPlanData } = useQuery(
        ["fetch-sleep"],
        fetchPlanData({ session: session, type: "sleep" }),
        {
            onError: (err) => {
                console.log("sleep err:", err);
            },
            onSuccess: (data) => {
                console.log(data);
                setPlanData(data);
            },
        }
    );


    const handleRefresh = () => {
        setRefreshing(true);
        reFetchPlanData();
        setRefreshing(false);
    };

    
    return (
        <ScrollView
            style={{ ...styles.container, top: insets.top + 10 }}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={handleRefresh}
                />
            }
        >
            <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 20 }}>{timeString.day}</Text>
            </View>
            <View style={{ alignItems: "center", gap: 40 }}>
                <CircularProgressWithLegend progress={ planData.scoreNumerator / planData.scoreDenominator * 100 }/>
                <Card style={{ backgroundColor: "#1EBAEA", height: 300, width: Dimensions.get('window').width - 20, flex: 1, flexDirection: "row" }}>
                    <View style={{ flex: 1, margin: 30, flexDirection: "row", gap: 60 }}>
                        <View style={{  }}>
                            <Text style={{ fontSize: 20, fontWeight: "500", opacity: 0.5 }}>Time Slept</Text>
                            <Text style={{ fontSize: 28, fontWeight: "700" }}>7h 12m</Text>
                        </View>
                        <View style={{ marginHorizontal: 40 }}>
                            <Text style={{ fontSize: 20, fontWeight: "500", opacity: 0.5 }}>Time to bed</Text>
                            <Text style={{ fontSize: 28, fontWeight: "700" }}>11:10pm</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, margin: 30, flexDirection: "row", gap: 60 }}>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: "500", opacity: 0.5 }}>Wake up</Text>
                            <Text style={{ fontSize: 28, fontWeight: "700" }}>8:10m</Text>
                        </View>
                        {/* <View style={{ marginHorizontal: 40 }}>
                            <Text style={{ fontSize: 20, fontWeight: "500", opacity: 0.5 }}>Wake up</Text>
                            <Text style={{ fontSize: 28, fontWeight: "700" }}>11:10pm</Text>
                        </View> */}
                    </View>
                </Card>
                {/* <BarChart 
                    data={}
                /> */}
            </View>
        </ScrollView>
    );
};


export default SleepScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    sectionFontStyle: {

    },

});