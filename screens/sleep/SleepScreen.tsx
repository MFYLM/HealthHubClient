import { Text } from "react-native-paper";
import { View } from "react-native";
import { StyleSheet, Dimensions, Animated, LayoutAnimation } from "react-native";
import { StackScreenProps } from "../../navigation/Navigation";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { RootTabParamList } from "../../navigation/TabNavigator";
import { BarChart, LineChart, ProgressChart } from "react-native-chart-kit";
import { useState, useEffect, useRef } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { timeToString } from "../../utils/helpers/time";
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
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
        style: {
            borderRadius: 16,
        },
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
        <View style={{ ...styles.container, top: insets.top + 10  } }>
            <Text style={{ fontSize: 20 }}>{timeString.day}</Text>
            <View>
                <ProgressChart
                    data={data}
                    width={Dimensions.get('window').width - 20}
                    height={300}
                    strokeWidth={15}
                    radius={40}
                    chartConfig={chartConfig}
                    hideLegend={false}
                    style={{
                        marginVertical: 8,
                        marginHorizontal: 5,
                        borderRadius: 20,
                    }}
                />
                {/* <BarChart 
                    data={}
                /> */}
            </View>
        </View>
    );
};


export default SleepScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    }
});