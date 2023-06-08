import React from 'react';
import { View, Text, Pressable } from 'react-native';


const ExerciseOptions = ({ exerciseName, duration, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.cardContainer}>
    <View style={styles.contentContainer}>
      <Text style={styles.exerciseName}>Previous exercise: {exerciseName}</Text>
      <Text style={styles.duration}>Calories burned: {duration}</Text>
    </View>
  </Pressable>
  );
};

const styles = {

  cardContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    borderRadius: 50,
    marginVertical: 0,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 15,
    backgroundColor: "#ffdfab",
    height: 260,
    width: 350,
    top: 50,
  },

  contentContainer: {
    flexDirection: 'column',
  },
  exerciseName: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 55,
    marginBottom: 10,
    textAlign: 'center',
  },
  duration: {
    fontSize: 20,
    marginBottom: 80,
    color: '#888888',
    textAlign: 'center',
  },
};

export default ExerciseOptions;