import React, { useEffect, useRef } from 'react';
import { View, Animated, Text, StyleSheet } from 'react-native';

const progressBar = ({ currentCalorieCount, totalCalorieCount }) => {
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: currentCalorieCount,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [currentCalorieCount, progressAnim]);

  const progressBarWidth = progressAnim.interpolate({
    inputRange: [0, totalCalorieCount],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.progressBar, { width: progressBarWidth }]}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '90%',
    height: 50,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
    overflow: 'hidden',
    marginBottom: 0,
    marginTop: 0,
    marginLeft: 16,
    alignItems: 'flex-start'
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#2196F3',
  },
});

export default progressBar;