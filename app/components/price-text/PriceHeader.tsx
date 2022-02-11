import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-elements';

export interface PriceHeaderProps {
  balance: number;
  subBalance: string;
  containerStyle: ViewStyle;
}

export const PriceHeader = (props: PriceHeaderProps) => {
  const { theme } = useTheme();
  const styles = useStyles(theme);
  const balanceString = props.balance.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <View style={props.containerStyle}>
      <Text>2 WINS</Text>
      <Text style={styles.balanceText}>{balanceString}</Text>
      <Text
        style={[
          styles.subBalanceText,
          { color: props.balance < 0 ? 'red' : '#04B88C' },
        ]}
      >
        {props.subBalance}
      </Text>
    </View>
  );
};

const useStyles = (color: any) =>
  StyleSheet.create({
    balanceText: {
      fontWeight: 'bold',
      fontSize: 32,
    },
    subBalanceText: {
      fontSize: 13,
    },
  });
