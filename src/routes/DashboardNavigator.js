import React from 'react';
import Home from '../screens/Home';
import {View, SafeAreaView, StatusBar} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import CustomHeader from '../components/CustomHeader/CustomHeader';
import colors from '../constants/colors';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const PreRenderedStack = () => {
  return (
    <>
      {/* <SafeAreaView style={{flex: 0, backgroundColor: colors.primary}} /> */}
      <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.primary}
          translucent={false}
        />
        <CustomHeader title={'Hello Sandra,'} />
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="HomeScreen" component={Home} />
        </Stack.Navigator>
      </SafeAreaView>
    </>
  );
};

const DashboardNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Drawer.Screen name="Home" component={PreRenderedStack} />
    </Drawer.Navigator>
  );
};

export default DashboardNavigator;
