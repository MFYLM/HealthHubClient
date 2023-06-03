import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import TopBar from "../../components/TopBar";
import RecommendationCard from "../../components/main/RecommendatoinCard";
import { RootStackParamList } from "../../navigation/StackNavigator";
import { useQuery } from "react-query";
import { fetchRecommendations } from "../../apiFunctions";
import { User1 } from "../../utils/samples/sampleUsers";
import { useEffect } from "react";
import { SERVER_HOST, axios } from "../../utils/axios";


interface MainScreenNavigationProp<ScreenParams extends ParamListBase> {
    navigation: NavigationProp<ScreenParams>
};


const MainScreen = ({ navigation }: MainScreenNavigationProp<RootStackParamList>) => {
    // TODO: retrieve recommendations
    const sessionId = User1.id;

    // This function send a post request to the target url (API endpoint)
    useEffect(() => {
        const testFetch = async () => {
            const res = await axios({
				url: `${SERVER_HOST}/users/login`,
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
					'session-id': sessionId
				},
				data: {
					email: 'testemail@uci.edu',
					password: 'password123'
				}
			});
			
			console.log(res.data);
			
            return res;
        };


        const res = testFetch().catch((err) => console.log("err: ", err));
        console.log(res);
    }, []);

    const { refetch: refetchRecommendations } = useQuery(
        ["fetch-recommendations"],
        fetchRecommendations,
        {
            enabled: false,
            onError: (err) => {
                
            },
            onSuccess: (data) => {
                
            },
        }
    );


    return (
        <View style={styles.container}>
            <TopBar username="Fake User" section="main" navigation={navigation} isTop />
            <ScrollView contentContainerStyle={ styles.cardView }>
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