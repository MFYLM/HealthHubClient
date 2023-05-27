import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { SegmentedButtons } from "react-native-paper";


interface btnStruct {
    value: string,
    label: string,
};


interface SwitchTabProps {
    value: string,
    setValue: () => {},
    buttonStructure: btnStruct[]
};


const SwitchTab = (props: SwitchTabProps) => {

    const { value, setValue, buttonStructure } = props;

    return (
        <View>
            <SegmentedButtons 
                value={value}
                onValueChange={setValue}
                buttons={buttonStructure}
            />
        </View>
    );
};



export default SwitchTab;


const styles = StyleSheet.create({

});
