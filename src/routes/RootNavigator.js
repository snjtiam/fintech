import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import DashboardNavigator from './DashboardNavigator';
import TransferMoney from './../screens/TransferMoney/TransferMoney';
import Onboarding from '../screens/Onboarding/Onboarding';

const RootNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Dashboard" component={DashboardNavigator} />
        <Stack.Screen name="TransferMoney" component={TransferMoney} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
