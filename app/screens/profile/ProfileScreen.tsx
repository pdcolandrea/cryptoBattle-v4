import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import useAuth from '../../state/app-state';

export const ProfileScreen = () => {
  const onLogoutPressed = () => {
    useAuth.setState({ isAuth: false });
  };

  return (
    <View>
      <Text>Explore</Text>
      <TouchableOpacity
        onPress={onLogoutPressed}
        style={{
          padding: 12,
          backgroundColor: 'orange',
          alignSelf: 'center',
          borderRadius: 10,
        }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
