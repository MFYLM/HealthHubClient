import { StyleSheet } from "react-native";
import { Card, IconButton, Text } from "react-native-paper";


interface CardProps {
    title: string;
    content: string;
    iconName: string;
    cardAction: () => void;
};


const RecommendationCard = (props: CardProps) => {
    const { title, content, iconName, cardAction } = props;


    return (
        <Card
            mode="elevated" 
            onPress={() => { console.log("trigger card action"); cardAction(); } }
            style={ styles.container }
        >
            <Card.Title style={{  }} title={title} left={() => <IconButton  icon={iconName} disabled />} />
            <Card.Content>
                <Text variant="bodyMedium">{content}</Text>
            </Card.Content>
        </Card>
    );
};


export default RecommendationCard;


const styles = StyleSheet.create({
    container: {
        height: 200, 
        width: "95%", 
        backgroundColor: "green",
        alignItems: "center",
        borderRadius: 30
    }
});