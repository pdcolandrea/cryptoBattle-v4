import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import {
  GradientBackground,
  Header,
  NotificationBell,
  ScrollableRecents,
} from '../../components';
import useAuth from '../../state/app-state';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CryptoBoxes } from '../../components/crypto-boxes/cryptoBoxes';

const HeaderRight = () => {
  return (
    <TouchableOpacity>
      <Text style={{ fontWeight: '700' }}>TRADE</Text>
    </TouchableOpacity>
  );
};

export const DashboardScreen = () => {
  const { setOptions } = useNavigation();
  const isAuth = useAuth(state => state.isAuth);

  useEffect(() => {
    setOptions({
      title: 'Dashboard',
      headerLeft: () => <NotificationBell />,
      headerRight: () => <HeaderRight />,
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <GradientBackground colors={['#ffffff', '#eef0f7']} />
      <ScrollableRecents
        text="friends"
        containerStyle={{ marginTop: 10, height: 36 }}
      />
      <Text>You have made $1,038,039</Text>
      <CryptoBoxes />
      <Text>Your Ongoing Battles</Text>
    </View>
  );
};
