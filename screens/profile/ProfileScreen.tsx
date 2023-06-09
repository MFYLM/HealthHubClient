import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { Pressable, RefreshControl, ScrollView, StyleSheet, View } from "react-native";
import { Text, Avatar, List, Chip, IconButton } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Surface } from "react-native-paper";
import { RootStackParamList } from "../../navigation/StackNavigator";
import { useMutation, useQuery } from "react-query";
import { fetchUserSettings, loginUser, logoutUser } from "../../apiFunctions";
import { User1, User2 } from "../../utils/samples/sampleUsers";
import { getSession } from "../../utils/helpers/session";
import { useEffect, useState } from "react";
import { UserSettings } from "../../apiInterfaces";


interface ProfileScreenNavigationProp<ScreenParams extends ParamListBase> {
    navigation: NavigationProp<ScreenParams>
};


const ProfileScreen = ({ navigation }: ProfileScreenNavigationProp<RootStackParamList>) => {
    const insets = useSafeAreaInsets();
    const session = User1.session;
    const [settings, setSettings] = useState<UserSettings>({ email: "", sex: "", weight: 0, height: 0, allowedExercises: [] });
    const [refreshing, setRreshing] = useState(false);

    // const { } = useQuery(
    //     ["fetch-session"],
    //     getSession,
    //     {
    //         onError: (err) => {
    //             console.log(err);
    //         },
    //         onSuccess: (data) => {
    //             console.log("user session: ", data);
    //         },
    //     }
    // );

    const { refetch: refetchUserInfo } = useQuery(
        ["fetch-userinfo"],
        fetchUserSettings(session),
        {
            enabled: false,
            onError: (err) => {
                console.log(err);
            },
            onSuccess: (data) => {
                // console.log(data);
                setSettings(data);
            },
        }
    );


    const { mutate: handleLogout } = useMutation(
        ["logout-user"],
        logoutUser(session),
        {
            onError: (error) => {
                console.log(error);
            }
        }
    );


    useEffect(() => {
        refetchUserInfo();
    }, []);

    
    const handleRefresh = () => {
        setRreshing(true);
        refetchUserInfo();
        setRreshing(false);
    };


    return (
        <ScrollView 
            style={{ ...styles.container, top: insets.top }}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={handleRefresh}
                />
            }
        >
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 30 }}>
                <Text style={{ fontSize: 40, fontWeight: "bold" }}>Summary</Text>
                <IconButton icon={"exit-to-app"} onPress={() => { navigation.navigate("Login"); }}/>
            </View>
            <List.Section style={{ gap: 10 }}>
                <List.Item
                    titleStyle={ styles.titleStyle }
                    descriptionStyle={ styles.descriptionStyle }
                    title="Email"
                    description={settings.email}
                    style={ styles.listItemStyle }
                    left={() => <List.Icon icon={"email"} />}
                />
                <List.Item
                    descriptionStyle={ styles.descriptionStyle }
                    titleStyle={ styles.titleStyle }
                    title="Sex"
                    description={settings.sex === "m" ? "Male" : "Female"}
                    style={ styles.listItemStyle }
                    left={() => "m" === "m" ? <List.Icon icon={"gender-male"} /> : <List.Icon icon={"gender-female"} /> }
                />
                <List.Item
                    descriptionStyle={ styles.descriptionStyle }
                    titleStyle={ styles.titleStyle }
                    title="Weight"
                    description={settings.weight}
                    style={ styles.listItemStyle }
                    left={() => <List.Icon icon={"weight-kilogram"} />}
                />
                <List.Item
                    descriptionStyle={ styles.descriptionStyle }
                    titleStyle={ styles.titleStyle }
                    title="Height"
                    description={settings.height}
                    style={ styles.listItemStyle }
                    left={() => <List.Icon icon={"human-male-height-variant"} />}
                />
                <List.Subheader style={ styles.subHeaderStyle }>Exercise Options</List.Subheader>
                <View style={{ flexWrap: "wrap", flexDirection: "row", gap: 6 }}>
                    {
                        settings.allowedExercises.map((option, index) => 
                            <Chip style={{  }} key={index} mode="flat" selected={option.trigger}>{option.name}</Chip>
                        )
                    }
                </View>
                
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
    descriptionStyle: {
        fontSize: 20,
    },
    titleStyle: {
        fontSize: 15,
    }
});