import { StyleSheet, View, Text} from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import MealOptionCard from "../../components/mealOptionCard";
import { useNavigation } from '@react-navigation/native';
import ProgressBar from "../../components/progressBar";

interface DietScreenNavigationProp<ScreenParams extends ParamListBase> {
    navigation: NavigationProp<ScreenParams>
};

const DietScreen = () => {
    const navigation = useNavigation();

    const mealOptions = [
        {
          id: 1,
          mealName: 'Meal Option 1',
          calories: 'Calories for meal 1.',
        },
        {
          id: 2,
          mealName: 'Meal Option 2',
          calories: 'Calories for meal 2.',
        },
        {
          id: 3,
          mealName: 'Meal Option 3',
          calories: 'Calories for meal 3.',
        },
      ];

    const currentCalorieCount = 1500;
    const totalCalorieCount = 2000;

    
      return (
        <View style={styles.container}>

        <Text style={styles.dietTitle}>
          Recommended Meal Plan
        </Text>

        <Text style={styles.calorieCounter}>
          {currentCalorieCount} / {totalCalorieCount} calories
        </Text>

        <ProgressBar
            currentCalorieCount={currentCalorieCount}
            totalCalorieCount={totalCalorieCount}
        />

          {mealOptions.map((option) => (
            <MealOptionCard
              key={option.id}
              id={option.id}
              mealName={option.mealName}
              calories={option.calories}
              onPress={() => {
                // Handle onPress event
                console.log(`Clicked on meal option ${mealOptions[0].id}`);
              }}
            />
          ))}

          {/* <ProgressBar
            currentCalorieCount={currentCalorieCount}
            totalCalorieCount={totalCalorieCount}
          /> */}
        </View>
      );
};


export default DietScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: "#fffad6",
    },
    card: {
      position: 'absolute',
      top: 100,
      left: 20,
      width: 300,
    },
    calorieCounter: {
      fontSize: 25,
      textAlign: 'center',
      paddingBottom: 10,
      fontWeight: 'bold',

    },
    dietTitle: {
      fontSize: 30,
      fontWeight: 'bold',
      paddingBottom: 60,
    }
  });