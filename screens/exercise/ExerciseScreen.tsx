import { Text, Card } from "react-native-paper";
import { StyleSheet, View, } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { RootTabParamList } from "../../navigation/TabNavigator";


import ExerciseCircle from "../../components/ExerciseCircle";
import ExerciseOptions from "../../components/ExerciseOptions";


interface ExerciseScreenNavigationProp<ScreenParams extends ParamListBase> {
    navigation: NavigationProp<ScreenParams>
};


const ExerciseScreen = ({ navigation }: ExerciseScreenNavigationProp<RootTabParamList>) => {

  const exerciseOptions = [
      {
        exerciseName: 'Exercise Option 1',
        duration: 'Duration for exercise 1.',
      },
      {
        exerciseName: 'Exercise Option 2',
        duration: 'Duration for exercise 2.',
      },
      {
        exerciseName: 'Exercise Option 3',
        duration: 'Duration for exercise 3.',
      },
    ];


    const minutesExercised = 20;
    const totalMinutesExercised = 60;
    // const caloriesBurned = 300;
  
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

        {exerciseOptions.map((choice) => (
            <ExerciseOptions
              key={choice.exerciseName}
              exerciseName={choice.exerciseName}
              duration={choice.duration}
              onPress={() => {
                // Handle onPress event
                console.log(`Clicked on exercise option ${exerciseOptions[0].exerciseName}`);
              }}
            />
          ))}

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
    },
    exerciseTitle: {
      fontSize: 30,
      fontWeight: 'bold',
      bottom: 0,
      textAlign: "center"
    },
});