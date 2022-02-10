import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from 'react-native';
import { Icon } from 'react-native-elements';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {
  BattleScreen,
  DashboardScreen,
  WelcomeScreen,
  ExploreScreen,
  ProfileScreen,
} from '../screens';

import useAuth from '../state/app-state';

const defaultScreenOptions = (title?: string): NativeStackNavigationOptions => {
  return { headerShadowVisible: false };
};

const DashboardRoot = createNativeStackNavigator();
const DashboardStack = () => {
  return (
    <DashboardRoot.Navigator screenOptions={{ headerShown: false }}>
      <DashboardRoot.Screen
        name="dashboardScreen"
        component={DashboardScreen}
        options={{ headerShown: true }}
      />
    </DashboardRoot.Navigator>
  );
};

const BattleRoot = createNativeStackNavigator();
const BattleStack = () => {
  return (
    <BattleRoot.Navigator>
      <BattleRoot.Screen name="battleScreen" component={BattleScreen} />
    </BattleRoot.Navigator>
  );
};

const ExploreRoot = createNativeStackNavigator();
const ExploreStack = () => {
  return (
    <ExploreRoot.Navigator>
      <ExploreRoot.Screen name="exploreScreen" component={ExploreScreen} />
    </ExploreRoot.Navigator>
  );
};

const ProfileRoot = createNativeStackNavigator();
const ProfileStack = () => {
  return (
    <ProfileRoot.Navigator>
      <ProfileRoot.Screen name="profileScreen" component={ProfileScreen} />
    </ProfileRoot.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export const AppNavigator = (props: any) => {
  const isAuth = useAuth(state => state.isAuth);
  const colorScheme = useColorScheme();

  return isAuth ? (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'dashboard') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'market') {
            iconName = focused ? 'exchange-alt' : 'exchange-alt';
          } else if (route.name === 'transactions') {
            iconName = focused ? 'history' : 'history';
          } else {
            iconName = focused ? 'stream' : 'stream';
          }

          return (
            <Icon
              name={iconName}
              type="font-awesome-5"
              size={size - 4}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen name="dashboard" component={DashboardStack} />
      <Tab.Screen name="battle" component={BattleStack} />
      <Tab.Screen name="explore" component={ExploreStack} />
      <Tab.Screen name="profile" component={ProfileStack} />
    </Tab.Navigator>
  ) : (
    <Stack.Navigator>
      <Stack.Screen name="welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
};
