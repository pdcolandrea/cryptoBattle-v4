import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import {
  GradientBackground,
  Header,
  NotificationBell,
  PriceHeader,
  ScrollableRecents,
} from '../../components';
import useAuth from '../../state/app-state';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CryptoBoxes } from '../../components/crypto-boxes/cryptoBoxes';

const HeaderRight = (props: any) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={{ fontWeight: '700' }}>BATTLE</Text>
    </TouchableOpacity>
  );
};

export const DashboardScreen = () => {
  const { setOptions, navigate } = useNavigation();
  const isAuth = useAuth(state => state.isAuth);

  useEffect(() => {
    setOptions({
      title: 'Dashboard',
      headerLeft: () => <NotificationBell />,
      headerRight: () => <HeaderRight onPress={onHeaderRightPress} />,
    });
  }, []);

  const onHeaderRightPress = () => {
    // @ts-ignore wtf
    navigate('battle');
  };

  const _renderItem = ({ item, index }: any) => {
    return (
      <View style={{ backgroundColor: 'red', flexDirection: 'row' }}>
        <Text>G</Text>
        <Text>Clock</Text>
        <Text>G</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <GradientBackground colors={['#ffffff', '#eef0f7']} />
      <ScrollableRecents
        text="friends"
        containerStyle={{ marginTop: 10, height: 36 }}
      />
      <PriceHeader
        balance={14102.1}
        subBalance={'+73% all time'}
        containerStyle={{ marginTop: 20, paddingLeft: 8 }}
      />
      <CryptoBoxes />

      <Text style={styles.balanceText}>battles</Text>
      <FlatList
        data={[1, 2, 3]}
        renderItem={_renderItem}
        contentContainerStyle={{ paddingHorizontal: 8 }}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  balanceText: {
    fontWeight: 'bold',
    fontSize: 22,
    marginLeft: 6,
  },
});
