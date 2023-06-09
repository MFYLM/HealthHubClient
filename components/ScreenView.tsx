import { DeviceEventEmitter, StyleSheet, View as DefaultView } from "react-native";
import { View } from "react-native";

type ScreenViewProps = { name: string } & DefaultView['props']

const ScreenView = (props: ScreenViewProps) => {
    let { name, style, ...otherProps } = props
    return (
        <View
            style={[{ ...styles.screen }, style]}
            onTouchStart={() => DeviceEventEmitter.emit("touchScreen", name)}
            {...otherProps}
        />
    )
}

export default ScreenView

const styles = StyleSheet.create({
    screen: {},
})