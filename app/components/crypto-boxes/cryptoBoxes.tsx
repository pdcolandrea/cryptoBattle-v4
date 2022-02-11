import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  ViewStyle,
  ImageStyle,
  TextStyle,
  StyleSheet,
  FlatList,
  Text,
  Animated,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Percentage } from '../';
import { LineChart } from 'react-native-wagmi-charts';
const btcImage = require('../../../node_modules/cryptocurrency-icons/128/color/btc.png');

const styles = StyleSheet.create({
  balanceText: {
    fontWeight: 'bold',
    fontSize: 32,
  },
  cryptoBalance: {
    fontWeight: 'bold',
    color: '#162548',
    fontSize: 17,
  },
  cryptoCurr: {
    color: '#B1B4BB',
    fontWeight: '500',
    fontSize: 14,
  },
});

export interface CryptoBoxesProps {}

export function CryptoBoxes(props: CryptoBoxesProps) {
  const flatlistRef = useRef(null);

  const scrollToIndex = (index: number) => {
    // @ts-ignore
    flatlistRef.current.scrollToIndex({ index: index, animated: true });
  };

  return (
    <View
      style={{
        height: 220,
      }}
    >
      <FlatList
        data={[1, 2, 3, 4]}
        ref={flatlistRef}
        keyExtractor={it => it.toString()}
        renderItem={item => (
          <CryptoBox
            data={item}
            handleClick={(index: number) => scrollToIndex(index)}
          />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
}

const CryptoBox = (props: any) => {
  const startingWidth = 150;
  const [expander, setExpander] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [fullWidth, setFullWidth] = useState(260);
  const [widthState, setWidthState] = useState(150);
  const animatedWidth = useRef(new Animated.Value(startingWidth)).current;
  const data = [
    {
      timestamp: 1625945400000,
      value: 33575.25,
    },
    {
      timestamp: 1625946300000,
      value: 31545.25,
    },
    {
      timestamp: 1625947200000,
      value: 33510.25,
    },
    {
      timestamp: 1625948100000,
      value: 33215.25,
    },
  ];

  const data2 = [
    {
      timestamp: 1625945400000,
      value: 34575.25,
    },
    {
      timestamp: 1625946300000,
      value: 31545.25,
    },
    {
      timestamp: 1625947200000,
      value: 33510.25,
    },
    {
      timestamp: 1625948100000,
      value: 33215.25,
    },
  ];

  useEffect(() => {
    console.log(props);

    Animated.spring(animatedWidth, {
      friction: 100,
      toValue: expanded ? fullWidth : startingWidth,
      useNativeDriver: false,
    }).start();
  }, [expanded]);

  let isFirst: boolean = false;
  if (props.data.index) {
    isFirst = true;
  }

  const handleBoxClick = () => {
    console.log('clicked: ' + props.data.index);
    props.handleClick(props.data.index);
    setExpanded(!expanded);
  };

  useEffect(() => {
    animatedWidth.addListener(lis => {
      setWidthState(lis.value);
    });
  }, []);

  return (
    <TouchableOpacity onPress={handleBoxClick} style={{ alignSelf: 'center' }}>
      <Animated.View
        style={{
          opacity: 0.8,
          height: 190,
          width: animatedWidth,
          backgroundColor: '#fafafa',
          borderRadius: 8,
          marginLeft: isFirst ? 5 : 5,
          marginRight: 5,
          elevation: 4,
          shadowColor: 'rgb(0, 0, 0)',
          shadowOffset: {
            width: 3,
            height: 3,
          },
          shadowOpacity: 0.35,
          shadowRadius: 5,
        }}
      >
        <View
          style={{ paddingHorizontal: 15, paddingTop: 15, paddingBottom: 5 }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 5,
            }}
          >
            <Image
              source={btcImage}
              style={{ width: 26, height: 26, marginRight: 5 }}
            />
            <Text
              style={{ fontWeight: 'bold', fontSize: 18, color: '#162548' }}
            >
              Bitcoin
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.cryptoBalance}>19.3 </Text>
            <Text style={styles.cryptoCurr}>BTC</Text>
          </View>
          <Percentage change={-4.23} />
        </View>
        <LineChart.Provider data={props.data.index == 1 ? data2 : data}>
          <LineChart height={85} width={widthState}>
            <LineChart.Path
              color={props.data.index == 1 ? 'green' : 'red'}
              animationDuration={10}
            >
              <LineChart.Gradient />
            </LineChart.Path>
          </LineChart>
        </LineChart.Provider>
        <View
          style={{
            marginHorizontal: 15,
            alignSelf: 'center',
          }}
        >
          <Text>15 hours ago</Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};
