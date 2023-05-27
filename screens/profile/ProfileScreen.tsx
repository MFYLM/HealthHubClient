import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { Text, Avatar, List } from "react-native-paper";
import { RootTabParamList } from "../../navigation/TabNavigator";


interface ProfileScreenNavigationProp<ScreenParams extends ParamListBase> {
    navigation: NavigationProp<ScreenParams>
};


const ProfileScreen = ({ navigation }: ProfileScreenNavigationProp<RootTabParamList>) => {
    const defaultImageUri = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fvector%2Fuser-icon-flat-isolated-on-white-background-user-symbol-vector-illustration-gm1300845620-393045799&psig=AOvVaw21g4tsFP0kQ-7lccq3GFDR&ust=1684898045823000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKi66MC8iv8CFQAAAAAdAAAAABAE";


    return (
        <View style={ styles.container }>
            <View style={{ alignItems: "center" }}>
                <Avatar.Image style={{ margin: 30 }} size={80} source={{ uri: defaultImageUri }} />
            </View>
            <List.Section>
                <List.Subheader style={{ marginLeft: 10, fontSize: 20, fontWeight: "bold" }}>Basic</List.Subheader>
                <List.Item
                    title="My Profile"
                    left={() => <List.Icon icon={"account-circle"} />}
                />
            </List.Section>
        </View>
    );
};


export default ProfileScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    }
});