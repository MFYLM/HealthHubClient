import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Circle } from 'react-native-svg';


const circleSize = 250;
const circleWidth = 20;

const ExerciseProgress = ({ minsExercised, totalMinsExercised }) => {

  const circleRadius = circleSize / 2 - circleWidth / 2;

  const circumference = 2 * Math.PI * circleRadius;
  const progress = (minsExercised / totalMinsExercised) * circumference;

  return (
    <View style={styles.contentContainer}>
      <Svg width={circleSize} height={circleSize}>
        <Circle
          cx={circleSize / 2}
          cy={circleSize / 2}
          r={circleRadius}
          fill="#ffdfab"
          stroke='#fff8ed'
          strokeWidth={circleWidth}
        />
        <Circle
          cx={circleSize / 2}
          cy={circleSize / 2}
          r={circleRadius}
          fill="transparent"
          stroke="#FF9D00"
          strokeWidth={circleWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          transform={`rotate(-90, ${circleSize/2}, ${circleSize/2})`}
          strokeLinecap="round"
        />
      </Svg>
      <Text style={styles.exerciseMinsText}>
        {`${minsExercised} / ${totalMinsExercised}\n`} minutes exercised
        </Text>
    </View>
  );
};

const styles = {
    contentContainer: {
    },
    exerciseMinsText: {
        position: 'absolute',
        top: circleSize / 2 - 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: "#000000",
    },
  };

export default ExerciseProgress;