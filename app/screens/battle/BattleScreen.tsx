import { View, Text, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import useAuth from '../../state/app-state';
import { useNavigation } from '@react-navigation/native';
import { Badge, Card, Icon } from 'react-native-elements';
import Modal from 'react-native-modal';

const HeaderRightRules = (props: any) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Icon name="question-circle" type="font-awesome-5" />
    </TouchableOpacity>
  );
};

export const BattleScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const { setOptions } = useNavigation();

  useLayoutEffect(() => {
    setOptions({
      title: 'Battle',
      headerRight: () => (
        <HeaderRightRules onPress={() => setModalVisible(true)} />
      ),
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Modal
        isVisible={isModalVisible}
        backdropOpacity={0.4}
        onBackdropPress={() => setModalVisible(false)}
      >
        <Card containerStyle={{ borderRadius: 4 }}>
          <Card.Title>How To Play</Card.Title>
          <Card.Divider />
          <View>
            <Text>L</Text>
          </View>
        </Card>
      </Modal>
      <Text>battle</Text>
    </View>
  );
};
