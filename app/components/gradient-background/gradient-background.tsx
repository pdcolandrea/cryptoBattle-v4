import { View, Text, ViewStyle } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export interface GradientBackgroundProps {
  colors: string[];
}

export const GradientBackground = (props: GradientBackgroundProps) => {
  return <LinearGradient colors={props.colors} style={backgroundStyle} />;
};

const backgroundStyle: ViewStyle = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
};
