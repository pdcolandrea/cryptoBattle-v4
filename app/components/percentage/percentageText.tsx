import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  balanceText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  percentage: {
    fontSize: 13,
  },
  row: {
    alignSelf: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export interface PercentageProps {
  change: number;
}

export const Percentage = (props: PercentageProps) => {
  const [isPositive, setIsPositive] = useState(true);
  const colorHook = StyleSheet.create({
    percentage: {
      color: isPositive ? '#3DD65D' : '#FC6664',
    },
  });

  useEffect(() => {
    if (props.change < 0) setIsPositive(false);
  }, [props]);

  return (
    <View style={styles.row}>
      <Text style={[styles.percentage, colorHook.percentage]}>
        {isPositive ? '+' : ''}
        {props.change}%
      </Text>
    </View>
  );
};
