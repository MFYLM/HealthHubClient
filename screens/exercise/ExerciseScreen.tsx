import { Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { RootTabParamList } from "../../navigation/TabNavigator";
import ExerciseCircle from "../../components/ExerciseCircle";


interface ExerciseScreenNavigationProp<ScreenParams extends ParamListBase> {
    navigation: NavigationProp<ScreenParams>
};


const ExerciseScreen = ({ navigation }: ExerciseScreenNavigationProp<RootTabParamList>) => {
    const minutesExercised = 45;
    const caloriesBurned = 300;
  
    return (
      <View style={styles.container}>
        {/* Other components */}
        <ExerciseCircle
          minsExercised={minutesExercised}
          caloriesBurned={caloriesBurned}
        />
      </View>
    );
};


export default ExerciseScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
    }
});