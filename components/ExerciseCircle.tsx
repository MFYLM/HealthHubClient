import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ProgressChart } from "react-native-chart-kit";

const ExerciseProgress = ({ minsExercised, caloriesBurned }) => {
  const data = {
    data: [minsExercised / 60, caloriesBurned / 1000],
  };
  const chartConfig = {
    backgroundGradientFrom: '#556379',
    backgroundGradientTo: '#556379',
    color: (opacity = 1) => `rgba(96, 207, 255, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    style: {
        borderRadius: 16,
    },
    label: ["Deep Sleep", "Shallow Sleep"]
};

  return (
    <View style={styles.container}>
      <ProgressChart
        data={data}
        width={200}
        height={200}
        strokeWidth={16}
        radius={80}
        chartConfig={chartConfig}
        hideLegend
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ExerciseProgress;