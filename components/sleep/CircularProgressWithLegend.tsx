import { CircularProgressBase } from "react-native-circular-progress-indicator";
import { View, StyleSheet, Dimensions } from "react-native";
import { Card, Chip, Text, Avatar } from "react-native-paper";
import React from "react";
import { Ionicons } from "@expo/vector-icons";


interface ProgressPro {
    progress: number;
};


const CircularProgressWithLegend = (params: ProgressPro) => {
    const { progress } = params;

    const props = {
        activeStrokeWidth: 25,
        inActiveStrokeWidth: 25,
        inActiveStrokeOpacity: 0.2
    };

    return (
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", margin: 10, width: Dimensions.get('window').width - 20 }}>
            <CircularProgressBase
                {...props}
                value={progress}
                inActiveStrokeOpacity={0.5}
                radius={100}
                activeStrokeColor={'#18dcff'}
                inActiveStrokeColor={'red'}
            >
                {/* <CircularProgressBase
                    {...props}
                    value={87}
                    radius={80}
                    inActiveStrokeOpacity={0.1}
                    activeStrokeColor={'#badc58'}
                    inActiveStrokeColor={'#badc58'}
                /> */}
            </CircularProgressBase>
            <Card style={{ backgroundColor: "white", height: "100%", flexDirection: "column" }}>
                <View style={{ flex: 1, marginVertical: 40, marginLeft: 20, gap: 20 }}>
                    <Chip
                        style={{ justifyContent: "center", backgroundColor: "white" }}
                        textStyle={{ fontSize: 14, marginVertical: 0 }}
                        icon={() => <Ionicons name="radio-button-on" size={20} color={"#18dcff"} />}
                    >
                        <Text >Time Slept</Text>
                    </Chip>
                    <Chip
                        style={{ justifyContent: "center", backgroundColor: "white" }}
                        textStyle={{ fontSize: 14, marginVertical: 0 }}
                        icon={() => <Ionicons name="radio-button-on" size={20} color={ "red" } />}
                    >
                        <Text >Missing Sleep</Text>
                    </Chip>
                </View>
                <View style={{ flex: 1, alignItems: "center", width: 180 }}>
                    <Text>{`Sleep Progress: ${Math.floor(progress) + 1}%`}</Text>
                </View>
            </Card>
        </View>
    );
};


export default CircularProgressWithLegend;


const styles = StyleSheet.create({
    legendStyle: {

    }
});