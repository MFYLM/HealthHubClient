import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native-paper";


interface UserInfo {
    name: string,
    age: string,
    weight: number,
    score: number,         // amount of recommendation that user completes
}


const UserDetail = (user: UserInfo) => {
    const navigation = useNavigation();


    return (
        <View>
            <Text>Name</Text>
        </View>
    );
};


export default UserDetail;


const styles = StyleSheet.create({

});