import React from 'react';
import { View, Text, Pressable } from 'react-native';


const MealOptionCard = ({ id, mealName, calories, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.cardContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.mealName}>{mealName}</Text>
        <Text style={styles.calories}>{calories}</Text>
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
    marginVertical: 8,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 15,
    backgroundColor: "#F9E770",
  },
  contentContainer: {
    flex: 1,
    color: "#F9E770",
  },
  mealName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  calories: {
    fontSize: 14,
    color: '#888888',
    textAlign: 'center',
  },
};

export default MealOptionCard;