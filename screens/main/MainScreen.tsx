import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { useState } from "react";
import { RefreshControl, ScrollView, StyleSheet, View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import { Text } from "react-native-paper";
import { useQuery } from "react-query";
import { fetchLifestyleScore, fetchRecommendations } from "../../apiFunctions";
import { DietRecommendation, ExerciseRecommendation, SleepRecommendation, UserSessionData } from "../../apiInterfaces";
import TopBar from "../../components/TopBar";
import RecommendationCard from "../../components/main/RecommendatoinCard";
import { RootStackParamList } from "../../navigation/StackNavigator";
import { User1, User2, User3, User4 } from "../../utils/samples/sampleUsers";
import { getSession } from "../../utils/helpers/session";


interface MainScreenNavigationProp<ScreenParams extends ParamListBase> {
    navigation: NavigationProp<ScreenParams>
};


const MainScreen = ({ navigation }: MainScreenNavigationProp<RootStackParamList>) => {
    // TODO: retrieve recommendations
    const [sessionData, setSessionDate] = useState<UserSessionData>({ userId: "", sessionId: "" });

    const { refetch: fetchSession } = useQuery(
        ["fetch-session"],
        getSession,
        {
            onError: (err) => {
                
            },
            onSuccess: (data) => {
                console.log("session data: ", data);
                setSessionDate(data);
            },
        }
    );

    const user = User1;

    const sessionId = user.session;

    const [exerciseRecommendations, setExerciseRecommendations] = useState<ExerciseRecommendation[]>([]);
    const [sleepRecommendations, setSleepRecommendations] = useState<SleepRecommendation[]>([]);
    const [dietRecommendations, setDietRecommendations] = useState<DietRecommendation[]>([]);
    const [refreshing, setRreshing] = useState(false);
    const [score, setScore] = useState(0);

    // This function send a get request to the target url (API endpoint)
    const { refetch: refetchRecommendations } = useQuery(
        ["fetch-recommendations"],
        fetchRecommendations(sessionId),
        {
            onError: (err) => {
                console.log("err:", err);
            },
            onSuccess: (data) => {
                if (data.length === 0) {
                    console.log("fetch failed!");
                }

                setExerciseRecommendations(data[0] as ExerciseRecommendation[]);
                setSleepRecommendations(data[1] as SleepRecommendation[]);
                setDietRecommendations(data[2] as DietRecommendation[]);
            },
        }
    );


    const { refetch: refetchLifestyleScore } = useQuery(
        ["fetch-lifestylescore"],
        fetchLifestyleScore(sessionId),
        {
            onError: (err) => {
                console.log("score err:", err);
            },
            onSuccess: (data) => {
                console.log(data);
                setScore(data);
            },
        }
    );


    const handleRefresh = () => {
        setRreshing(true);
        refetchLifestyleScore();
        refetchRecommendations();
        setRreshing(false);
    };


    return (
        <View style={styles.container}>
            <TopBar username={user.name} section="main" navigation={navigation} isTop />
            <ScrollView
                contentContainerStyle={styles.cardView}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                    />
                }
            >
                <View style={{ flex: 1, flexDirection: "row", width: "95%", marginTop: 10 }}>
                    <CircularProgress
                        value={score * 100}
                        radius={100}
                        duration={3000}
                        inActiveStrokeOpacity={0.1}
                        inActiveStrokeWidth={40}
                        activeStrokeWidth={40}
                        activeStrokeColor={'#2465FD'}
                        activeStrokeSecondaryColor={'#C25AFF'}
                    />
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontSize: 20 }}>Your Lifestyle Score</Text>
                    </View>
                </View>

                <Text style={{ fontSize: 20, marginTop: 10 }}>
                    Here are today's recommendations
                </Text>
                <RecommendationCard
                    title="Sleep"
                    iconName="weather-night"
                    recommendations={sleepRecommendations}
                    color="#1EBAEA"
                    navigation={navigation}
                />
                <RecommendationCard
                    title="Exercise"
                    iconName="dumbbell"
                    recommendations={exerciseRecommendations}
                    color="#FF9D00"
                    navigation={navigation}
                />
                <RecommendationCard
                    title="Diet"
                    iconName="food"
                    recommendations={dietRecommendations}
                    color="#F9E770"
                    navigation={navigation}
                />
            </ScrollView>
        </View>
    );
};


export default MainScreen;


// add style here
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    cardView: {
        alignItems: "center",
        gap: 12
    }
});