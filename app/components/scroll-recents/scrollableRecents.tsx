import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import {
  View,
  ViewStyle,
  ImageStyle,
  TextStyle,
  StyleSheet,
  FlatList,
  Text,
} from 'react-native';
import { Icon } from 'react-native-elements';

export interface ScrollableRecentsProps {
  text: string;
  containerStyle: ViewStyle;
}

export function ScrollableRecents(props: ScrollableRecentsProps) {
  let temp = [
    { id: 1, type: 'fiend', coin: 'BTC', change: '-5%' },
    { id: 5, type: 'friend', coin: 'BTC', change: '15%' },
    { id: 7, type: 'friend', coin: 'ETH', change: '12%' },
    { id: 9, type: 'friend', coin: 'ETH', change: '12%' },
  ];

  return (
    <View style={props.containerStyle}>
      <FlatList
        horizontal
        keyExtractor={(item: any) => item.id}
        data={temp}
        renderItem={scrollableItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

function scrollableItem({ item, index }: any) {
  let isFirst: boolean = index == 0;

  return (
    <LinearGradient
      colors={[
        '#00FFFF',
        '#17C8FF',
        '#329BFF',
        '#4C64FF',
        '#6536FF',
        '#8000FF',
      ]}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 1.0 }}
      style={[styles.linearCon, { marginLeft: isFirst ? 5 : 5 }]}
    >
      <View style={styles.itemContainer}>
        <View style={styles.innerBadge}></View>

        <Text style={styles.itemText}>{item.coin} 32%</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  innerBadge: {
    height: 10,
    width: 10,
    backgroundColor: '#F59133',
    borderRadius: 360,
    alignSelf: 'center',
    marginRight: 5,
  },
  itemContainer: {
    backgroundColor: '#ffffff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 104,
    height: 36,
    borderRadius: 15,
  },
  itemText: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  linearCon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginRight: 5,
    padding: 1,
  },
});
