import React from 'react';
import { View, Text, Pressable } from 'react-native';


const MealOptionCard = ({ mealName, calories, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.cardContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.mealName}>Previous meal: {mealName}</Text>
        <Text style={styles.calories}>Calorie intake: {calories}</Text>
      </View>
    </Pressable>
  );
};

const styles = {
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 25,
    borderRadius: 50,
    marginVertical: 35,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 25,
    height: 260,
    width: 350,
    backgroundColor: "#F9E770",
  },
  contentContainer: {
    flex: 1,
    color: "#F9E770",
  },
  mealName: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: -40,
    textAlign: 'center',
  },
  calories: {
    fontSize: 20,
    color: '#888888',
    textAlign: 'center',
  },
};

export default MealOptionCard;