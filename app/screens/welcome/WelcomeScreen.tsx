import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import useAuth from '../../state/app-state';

export const WelcomeScreen = () => {
  const onLoginPressed = () => {
    useAuth.setState({ isAuth: true });
  };

  return (
    <View>
      <Text>Welcome</Text>
      <TouchableOpacity
        onPress={onLoginPressed}
        style={{
          padding: 12,
          backgroundColor: 'orange',
          alignSelf: 'center',
          borderRadius: 10,
        }}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
