import { StyleSheet, View, Text} from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import MealOptionCard from "../../components/mealOptionCard";
import { useNavigation } from '@react-navigation/native';
import ProgressBar from "../../components/progressBar";

import { fetchMealInfo } from "../../apiFunctions";
import { useState } from "react";
import { useQuery } from "react-query";
import { Card } from "react-native-paper";




interface DietScreenNavigationProp<ScreenParams extends ParamListBase> {
    navigation: NavigationProp<ScreenParams>
};

const DietScreen = () => {
    const navigation = useNavigation();

    const [plan, setPlan] = useState("");
    const [value, setValue] = useState(0);
    const [currentCalorieCount, setCurrentCalorieCount] = useState(0);
    const [totalCalorieCount, setTotalCalorieCount] = useState(0);

    const {} = useQuery(
      ["fetch-meal-info"],
      fetchMealInfo("a47efe59-f0eb-4915-b689-1a8a6a9fdba2"),
      {
          onError: (err) => {
              console.log("err:", err);
          },
          onSuccess: (data) => {
              setPlan(data["plan"]["name"]);
              setValue(data["plan"]["value"]);
              setCurrentCalorieCount(data["scoreNumerator"]);
              setTotalCalorieCount(data["scoreDenominator"]);
          },
      }
    );

    
      return (
        <View style={styles.container}>

        <Text style={styles.dietTitle}>
          Recommended Meal Plan
        </Text>

        <Card style={styles.progressCard}>
          <Text style={styles.calorieCounter}>
            {currentCalorieCount} / {totalCalorieCount} calories
          </Text>

          <ProgressBar
              currentCalorieCount={currentCalorieCount}
              totalCalorieCount={totalCalorieCount}
          />
        </Card>

        <MealOptionCard
              mealName={plan}
              calories={value}
              onPress={() => {
                // Handle onPress event
                console.log(`Clicked on previous plan ${plan}`);
              }}
            />          

        </View>
      );
};


export default DietScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
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
      paddingBottom: 30,
      paddingTop: 0,
      fontWeight: 'bold',

    },
    dietTitle: {
      fontSize: 30,
      fontWeight: 'bold',
      paddingBottom: 40,
    },
    progressCard: {
      backgroundColor: "#F9E770",
      height: 300,
      width: 350,
      borderRadius: 50,
      justifyContent: 'center',
    },
  });