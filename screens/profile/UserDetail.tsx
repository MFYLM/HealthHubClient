import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { Appbar, Card, Text } from "react-native-paper";
import { RootStackParamList } from "../../navigation/StackNavigator";
import { useSafeAreaInsets } from "react-native-safe-area-context";


export interface UserInfo {
    name: string,
    sex: string,
    age: number,
    weight: number,
    email: string,
    height: number
};

type UserDetailRouteProp = RouteProp<RootStackParamList, 'UserDetail'>;


const UserDetail = ({ route }: { route: UserDetailRouteProp }) => {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();
    const { user } = route.params;


    return (
        <View style={{ top: insets.top }}>
            <Appbar>
                <Appbar.BackAction onPress={() => navigation.goBack()}/>
            </Appbar>
            <View style={{ marginHorizontal: 10, gap: 4, marginTop: 10 }}>
                <Card>
                    <Card.Title title="Name"/>
                    <Card.Content>
                        <Text style={{ fontSize: 20 }} >{user.name}</Text>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Title title="Sex"/>
                    <Card.Content>
                        <Text style={{ fontSize: 20 }} >{user.sex}</Text>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Title title="Email"/>
                    <Card.Content>
                        <Text style={{ fontSize: 20 }} >{user.email}</Text>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Title title="Age"/>
                    <Card.Content>
                        <Text style={{ fontSize: 20 }} >{user.age}</Text>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Title title="Weight"/>
                    <Card.Content>
                        <Text style={{ fontSize: 20 }} >{`${user.weight} kg`}</Text>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Title title="Height"/>
                    <Card.Content>
                        <Text style={{ fontSize: 20 }} >{`${user.height} cm`}</Text>
                    </Card.Content>
                </Card>                
            </View>
        </View>
    );
};


export default UserDetail;


const styles = StyleSheet.create({

});