import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { Appbar, Card, Text } from "react-native-paper";
import { RootStackParamList } from "../../navigation/StackNavigator";
import { useSafeAreaInsets } from "react-native-safe-area-context";


const UserDetail = ( ) => {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();
    // const { sex, weight, height, email } = params;


    return (
        <View style={{ top: insets.top }}>
            <View style={{ marginHorizontal: 10, gap: 4, marginTop: 10 }}>
                <Card>
                    <Card.Title title="Email"/>
                    <Card.Content>
                        <Text style={{ fontSize: 20 }} >{email}</Text>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Title title="Sex"/>
                    <Card.Content>
                        <Text style={{ fontSize: 20 }} >{sex}</Text>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Title title="Weight"/>
                    <Card.Content>
                        <Text style={{ fontSize: 20 }} >{`${weight} kg`}</Text>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Title title="Height"/>
                    <Card.Content>
                        <Text style={{ fontSize: 20 }} >{`${height} cm`}</Text>
                    </Card.Content>
                </Card>                
            </View>
        </View>
    );
};


export default UserDetail;


const styles = StyleSheet.create({

});