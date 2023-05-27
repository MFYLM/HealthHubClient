import { Text } from "react-native-paper";
import { ScrollView, View } from "react-native";
import { StyleSheet, Dimensions, Animated, LayoutAnimation } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { RootTabParamList } from "../../navigation/TabNavigator";
import { BarChart, LineChart, ProgressChart } from "react-native-chart-kit";
import React, { useState, useEffect, useRef } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { timeToString } from "../../utils/helpers/time";
import { Card }  from "react-native-paper";
// import { Colors } from 'react-native/Libraries/NewAppScreen';


interface SleepScreenNavigationProp<ScreenParams extends ParamListBase> {
    navigation: NavigationProp<ScreenParams>
};




const SleepScreen = ({ navigation }: SleepScreenNavigationProp<RootTabParamList>) => {
    const [progressTime, setProgressTime] = useState(0);
    const insets = useSafeAreaInsets();
    
    const animationValue = useRef(new Animated.Value(0)).current;
    const timeString = timeToString(new Date());

    const data = {
        label: ["Deep Sleep", "Shallow Sleep"],
        data: [progressTime, progressTime * 0.5]
    }

    const chartConfig = {
        backgroundGradientFrom: '#556379',
        backgroundGradientTo: '#556379',
        color: (opacity = 1) => `rgba(96, 207, 255, ${opacity})`,
        strokeWidth: 2,
        barPercentage: 0.5,
        useShadowColorFromDataset: false,
        style: {
            borderRadius: 16,
        },
        label: ["Deep Sleep", "Shallow Sleep"]
    };

    useEffect(() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        // Define animation for chart
        Animated.timing(animationValue, {
          toValue: 0.65, // Value to graph
          duration: 2500, // Duration for animation
          useNativeDriver: true,
        }).start();
    
        // Listen the animation variable and update chart variable
        animationValue.addListener(({ value }) => {
            setProgressTime(value);
        });
    
    }, []);

    return (
        <ScrollView style={{ ...styles.container, top: insets.top + 10  } }>
            <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 20 }}>{timeString.day}</Text>
            </View>
            <View style={{ alignItems: "center" }}>
                <ProgressChart
                    data={data}
                    width={Dimensions.get('window').width - 20}
                    height={300}
                    strokeWidth={15}
                    radius={40}
                    chartConfig={chartConfig}
                    style={{
                        marginVertical: 8,
                        marginHorizontal: 5,
                        borderRadius: 20,
                    }}
                    hasLegend={true}
                    // legend={[]}
                />
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
                            <Text style={{ fontSize: 28, fontWeight: "700" }}>11:10pm</Text>
                        </View>
                        <View style={{ marginHorizontal: 40 }}>
                            <Text style={{ fontSize: 20, fontWeight: "500", opacity: 0.5 }}>Wake up</Text>
                            <Text style={{ fontSize: 28, fontWeight: "700" }}>11:10pm</Text>
                        </View>
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