import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import RecommendationCard from "../../components/RecommendatoinCard";
import TopBar from "../../components/TopBar";
import { RootTabParamList } from "../../navigation/TabNavigator";


interface MainScreenNavigationProp<ScreenParams extends ParamListBase> {
    navigation: NavigationProp<ScreenParams>
};


const MainScreen = ({ navigation }: MainScreenNavigationProp<RootTabParamList>) => {


    return (
        <View style={styles.container}>
            <TopBar username="Fake User" section="main" navigation={navigation} isTop />
            <View style={ styles.cardView }>
                <Text style={{ fontSize: 20, marginTop: 10 }}>
                    Here are today's recommendations
                </Text>
                <RecommendationCard 
                    title="test title"
                    content="this is a test content to display"
                    iconName="camera"
                    cardAction={() => {}}
                />
                <RecommendationCard 
                    title="test title"
                    content="this is a test content to display"
                    iconName="camera"
                    cardAction={() => {}}
                />
            </View>
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
        gap: 20
    }
});