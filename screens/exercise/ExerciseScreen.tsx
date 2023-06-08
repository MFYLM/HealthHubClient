import { Text, Card } from "react-native-paper";
import { StyleSheet, View, } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { RootTabParamList } from "../../navigation/TabNavigator";


import ExerciseCircle from "../../components/ExerciseCircle";
import ExerciseOptions from "../../components/ExerciseOptions";
import { fetchExerciseInfo } from "../../apiFunctions";
import { useState } from "react";
import { useQuery } from "react-query";



interface ExerciseScreenNavigationProp<ScreenParams extends ParamListBase> {
    navigation: NavigationProp<ScreenParams>
};


const ExerciseScreen = ({ navigation }: ExerciseScreenNavigationProp<RootTabParamList>) => {

  const [plan, setPlan] = useState("");
  const [value, setValue] = useState(0);
  const [minutesExercised, setMinutesExercised] = useState(0);
  const [totalMinutesExercised, setTotalMinutesExercised] = useState(0);

  const {} = useQuery(
    ["fetch-exercise-info"],
    fetchExerciseInfo("a47efe59-f0eb-4915-b689-1a8a6a9fdba2"),
    {
        onError: (err) => {
            console.log("err:", err);
        },
        onSuccess: (data) => {
            console.log(data);
            console.log(data["scoreNumerator"]);
            console.log(data["plan"]["name"]);
            setPlan(data["plan"]["name"]);
            setValue(data["plan"]["value"]);
            setMinutesExercised(data["scoreNumerator"]);
            setTotalMinutesExercised(data["scoreDenominator"]);
        },
    }
  );

  
    return (
      <View style={styles.container}>
        <Text style={styles.exerciseTitle}>
          Recommended Exercise Routines
        </Text>

        <Card style={styles.circleCard}>
          <ExerciseCircle 
            minsExercised={minutesExercised}
            totalMinsExercised={totalMinutesExercised}
            />
        </Card>

        <ExerciseOptions
              exerciseName={plan}
              duration={value}
              onPress={() => {
                // Handle onPress event
                console.log(`Clicked on exercise option ${plan}`);
              }}
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
    },
    circleCard: {
      justifyContent: "center",
      alignItems: "center",
      bottom: -20,
      height: 300,
      width: 350,
      backgroundColor: "#ffdfab",
      borderRadius: 50,
    },
    exerciseTitle: {
      fontSize: 30,
      fontWeight: 'bold',
      bottom: 0,
      textAlign: "center"
    },
});