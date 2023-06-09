import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, View } from "react-native";
import { Button, Card, IconButton, Text } from "react-native-paper";
import { RootStackParamList } from "../../navigation/StackNavigator";
import { DietRecommendation, ExerciseRecommendation, SleepRecommendation } from "../../apiInterfaces";


interface CardProps {
    title: string;
    iconName: string;
    color: string;
    navigation: NavigationProp<RootStackParamList>;
    recommendations: ExerciseRecommendation[] | SleepRecommendation[] | DietRecommendation[];
};


const RecommendationCard = (props: CardProps) => {
    const { title, color, iconName, navigation, recommendations } = props;

    return (
        <Pressable
            style={ styles.container }
            onPress={ () => { navigation.navigate("RecommendDetail", { category: title, recommendations: recommendations }) } }
        >
            <View
                style={ { ...styles.cardView, backgroundColor: color } }
            >
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <IconButton icon={iconName} disabled size={60} />
                </View>
                <View style={{ flex: 3 }}>
                    <Card.Content style={{ alignItems: "center", marginTop: 100 }}>
                        <Text style={{ fontSize: 30 }}>{`${title}`}</Text>
                    </Card.Content>
                </View>
            </View>
        </Pressable>
    );
};


export default RecommendationCard;


const styles = StyleSheet.create({
    container: {
        width: "95%"
    },
    cardView: {
        height: 250,
        borderRadius: 20,
        flex: 1,
        flexDirection: "row",
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.6,
        shadowRadius: 6,
        borderColor: "black"
    }
});