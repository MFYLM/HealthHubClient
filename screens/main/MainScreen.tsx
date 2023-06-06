import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { useQuery } from "react-query";
import { fetchRecommendations, testFetch } from "../../apiFunctions";
import TopBar from "../../components/TopBar";
import RecommendationCard from "../../components/main/RecommendatoinCard";
import { RootStackParamList } from "../../navigation/StackNavigator";
import { User1 } from "../../utils/samples/sampleUsers";
import CircularProgress from "react-native-circular-progress-indicator";


interface MainScreenNavigationProp<ScreenParams extends ParamListBase> {
    navigation: NavigationProp<ScreenParams>
};


const MainScreen = ({ navigation }: MainScreenNavigationProp<RootStackParamList>) => {
    // TODO: retrieve recommendations
    const sessionId = User1.id;

    // This function send a get request to the target url (API endpoint)

    const { refetch: refetchRecommendations } = useQuery(
        ["fetch-recommendations"],
        fetchRecommendations,
        {
            onError: (err) => {
                console.log("err:", err);
            },
            onSuccess: (data) => {
                console.log(data);
            },
        }
    );


    return (
        <View style={styles.container}>
            <TopBar username="Fake User" section="main" navigation={navigation} isTop />
            <ScrollView contentContainerStyle={ styles.cardView }>
                <View style={{ flex: 1, flexDirection: "row", width: "95%", marginTop: 10 }}>
                    <CircularProgress
                        value={80}
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
                    content="this is a test content to display"
                    iconName="weather-night"
                    color="#1EBAEA"
                    navigation={navigation}
                />
                <RecommendationCard
                    title="Exercise"
                    content="this is a test content to display"
                    iconName="dumbbell"
                    color="#FF9D00"
                    navigation={navigation}
                />
                <RecommendationCard
                    title="Diet"
                    content="this is a test content to display"
                    iconName="food"
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