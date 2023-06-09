import { NavigationProp, ParamListBase, RouteProp, useNavigation } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import { RootStackParamList } from "../../navigation/StackNavigator";
import { Button, IconButton, Paragraph, Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import Checkbox from 'expo-checkbox';
import { DietRecommendation, ExerciseRecommendation, SleepRecommendation, choosePlanParam } from "../../apiInterfaces";
import { getSession } from "../../utils/helpers/session";
import { useQuery } from "react-query";
import { choosePlan } from "../../apiFunctions";
import { User1 } from "../../utils/samples/sampleUsers";


interface RecommendDetailNavigationProp<ScreenParams extends ParamListBase> {
    navigation: NavigationProp<ScreenParams>
};

type RecommendDetailRouteProp = RouteProp<RootStackParamList, 'RecommendDetail'>;


const RecommendDetail = ({ route }: { route: RecommendDetailRouteProp }) => {
    const insets = useSafeAreaInsets();
    const { category, recommendations } = route.params;
    const [planIndex, setPlanIndex] = useState(-1);
    const [checked, setChecked] = useState(new Array<boolean>(recommendations.length).fill(false));
    const [planParam, setPlanParam] = useState<choosePlanParam>({ session: "", planName: "", idealPlan: recommendations[0], chosenPlan: recommendations[0] });

    const { refetch: selectPlan } = useQuery(
        ["select-plan"],
        choosePlan(planParam),
        {
            enabled: false,
            onError: (err) => {
                console.log(err);
            },
            onSuccess: (data) => {
                // console.log(data);
            },
        }
    );

    // const {refetch : refetchSession} = useQuery(
    //     ["fetch-session"],
    //     getSession,
    //     {
    //         e
    //         onError: (error) => {
    //             console.log("get session error: ", error);
    //         },
    //         onSuccess: (data) => {
    //             console.log(data);
    //         }
    //     }
    // );

    const navigation = useNavigation();
    // console.log(recommendations);

    return (
        <View style={{ top: insets.top, alignItems: "center" }}>
            <View style={{ alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: "100%" }}>
                <IconButton size={30} icon={"arrow-left-thin"} onPress={() => navigation.goBack()} />
                <Text style={{ marginRight: 100, fontSize: 25 }}>{`${category} Suggestions`}</Text>
            </View>
            <View style={{ flexDirection: "column", justifyContent: "center", marginTop: 80 }}>
                {
                    recommendations.map((recommendation, index) => {

                        return <View key={index} style={{ flexDirection: "row", alignItems: "center", height: 100, gap: 10 }}>
                            <Checkbox
                                style={{ height: 30, width: 30 }}
                                key={index}
                                value={checked[index]}
                                onValueChange={() => {
                                    let newChecked = new Array<boolean>(checked.length).fill(false);
                                    newChecked[index] = !checked[index];
                                    setChecked(newChecked);
                                    if (newChecked[index]) {
                                        setPlanIndex(index);
                                    }
                                    else {
                                        setPlanIndex(-1);
                                    }

                                    const params: choosePlanParam = {
                                        session: User1.session,
                                        planName: recommendations[0].type,
                                        idealPlan: recommendations[0],
                                        chosenPlan: recommendations[index]
                                    };
                                    setPlanParam(params);
                                }}
                            />
                            <Text>
                                {
                                    recommendation.type === "meal" ?
                                        `${(recommendation as DietRecommendation).name} with ${(recommendation as DietRecommendation).calories} calories`
                                        :
                                        `${recommendation.name} for ${Math.floor((recommendation as ExerciseRecommendation | SleepRecommendation).duration / 60) + 1} minutes`
                                }
                            </Text>
                        </View>
                    })
                }
                <Button
                    mode="outlined"
                    onPress={() => {
                        selectPlan();
                        navigation.goBack();
                    }}
                >Choose Plan</Button>
            </View>
        </View >
    );
};

export default RecommendDetail;


const styles = StyleSheet.create({
    container: {

    },
    checkbox: {
        margin: 8,
    },
});