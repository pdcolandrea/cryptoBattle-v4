import React from 'react';
import { View, Text } from 'react-native';

export interface HeaderProps {
  text: string;
  leftComponent?: JSX.Element;
}

export const Header = ({ text, leftComponent }: HeaderProps) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};
