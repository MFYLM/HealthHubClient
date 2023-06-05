import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { Text, Avatar, List } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Surface } from "react-native-paper";
import { RootStackParamList } from "../../navigation/StackNavigator";
import { UserInfo } from "./UserDetail";


interface ProfileScreenNavigationProp<ScreenParams extends ParamListBase> {
    navigation: NavigationProp<ScreenParams>
};


const ProfileScreen = ({ navigation }: ProfileScreenNavigationProp<RootStackParamList>) => {
    const defaultImageUri = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fvector%2Fuser-icon-flat-isolated-on-white-background-user-symbol-vector-illustration-gm1300845620-393045799&psig=AOvVaw21g4tsFP0kQ-7lccq3GFDR&ust=1684898045823000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKi66MC8iv8CFQAAAAAdAAAAABAE";
    const insets = useSafeAreaInsets();

    const user: UserInfo = {
        name: "Fake User",
        sex: "male",
        email: "abc@abc.com",
        height: 180,
        age: 23,
        weight: 72
    };


    return (
        <ScrollView style={{ ...styles.container, top: insets.top }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 30 }}>
                <Text style={{ fontSize: 40, fontWeight: "bold" }}>Summary</Text>
                <Pressable onPress={() => navigation.navigate("UserDetail", { user: user })}><Avatar.Image size={50} source={{ uri: defaultImageUri }} /></Pressable>
            </View>
            <List.Section style={{ gap: 10 }}>
                <List.Subheader style={ styles.subHeaderStyle }>Exercise</List.Subheader>
                <List.Item
                    titleStyle={ styles.titleStyle }
                    title="Walking + Running Distance"
                    style={ styles.listItemStyle }
                    left={() => <List.Icon icon={"shoe-sneaker"} />}
                    right={() => <List.Icon icon={"chevron-right"} />}
                    onPress={() => navigation.navigate("DisplayModule", { moduleName: "Walking + Running Distance" })}
                />
                <List.Item
                    titleStyle={ styles.titleStyle }
                    title="Flights Climbed"
                    style={ styles.listItemStyle }
                    left={() => <List.Icon icon={"stairs"} />}
                    right={() => <List.Icon icon={"chevron-right"} />}
                    onPress={() => navigation.navigate("DisplayModule", { moduleName: "Flights Climbed" })}
                />

                <List.Subheader style={ styles.subHeaderStyle }>Sleep</List.Subheader>
                <List.Item
                    titleStyle={ styles.titleStyle }
                    title="Sleep Duration"
                    style={ styles.listItemStyle }
                    left={() => <List.Icon icon={"bed"} />}
                    right={() => <List.Icon icon={"chevron-right"} />}
                    onPress={() => navigation.navigate("DisplayModule", { moduleName: "Sleep Duration" })}
                />

                <List.Subheader style={ styles.subHeaderStyle }>Diet</List.Subheader>
                <List.Item
                    titleStyle={ styles.titleStyle }
                    title="Energy Burned"
                    style={ styles.listItemStyle }
                    left={() => <List.Icon icon={"fire"} />}
                    right={() => <List.Icon icon={"chevron-right"} />}
                    onPress={() => navigation.navigate("DisplayModule", { moduleName: "Energy Burned" })}
                />
                
            </List.Section>
        </ScrollView>
    );
};


export default ProfileScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        marginHorizontal: 30
    },
    subHeaderStyle: {
        paddingLeft: 10, 
        paddingVertical: 10, 
        fontSize: 20, 
        fontWeight: "bold" 
    },
    listItemStyle: {
        paddingHorizontal: 10,
        paddingRight: 10,
        paddingVertical: 10,
        backgroundColor: "white",
        alignContent: "space-around",
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 5,
        borderColor: "black"
    },
    iconStyle: {
        
    },
    titleStyle: {
        fontSize: 20,
    }
});