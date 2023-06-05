import React, { Dispatch, SetStateAction, useState } from "react";
import { View, StyleSheet } from "react-native";
import { SegmentedButtons } from "react-native-paper";


export interface btnStruct {
    value: string,
    label: string,
};


interface SwitchTabProps {
    value: string,
    setValue: Dispatch<SetStateAction<string>>,
    buttonStructure: btnStruct[],
};


const SwitchTab = (props: SwitchTabProps) => {
    const { value, setValue, buttonStructure } = props;

    return (
        <View style={{ alignItems: "center", marginTop: 5 }}>
            <SegmentedButtons
                value={value}
                onValueChange={setValue}
                buttons={buttonStructure}
                style={{ width: "95%" }}
            />
        </View>
    );
};



export default SwitchTab;


const styles = StyleSheet.create({

});
