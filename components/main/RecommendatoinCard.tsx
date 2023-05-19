import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, View } from "react-native";
import { Button, Card, IconButton, Text } from "react-native-paper";
import { RootStackParamList } from "../../navigation/StackNavigator";


interface CardProps {
    title: string;
    content: string;
    iconName: string;
    color: string;
    navigation: NavigationProp<RootStackParamList>;
};


const RecommendationCard = (props: CardProps) => {
    const { title, content, color, iconName, navigation } = props;


    return (
        <Pressable
            style={ styles.container }
            onPress={ () => { navigation.navigate("RecommendDetail", { category: title }) } }
        >
            <View
                style={ { ...styles.cardView, backgroundColor: color } }
            >
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <IconButton icon={iconName} disabled size={60} />
                </View>
                <View style={{ flex: 3 }}>
                    <Card.Title titleStyle={{ fontSize: 20 }} title={title} />
                    <Card.Content>
                        <Text variant="bodyMedium">{content}</Text>
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
        flexDirection: "row"
    }
});