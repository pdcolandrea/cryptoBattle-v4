import { Text, StyleSheet, View } from 'react-native';
import React, { Component } from 'react';
import { Badge, Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const NotificationBell = () => {
  return (
    <TouchableOpacity>
      <Icon name="bell" type="font-awesome-5" />
      <Badge
        badgeStyle={{ position: 'absolute', top: -9.5, right: 0 }}
        status="error"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});
