import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import BalanceAndTransfer from './components/BalanceAndTransfer';
import dimensions from '../../constants/dimensions';
import Transactions from './components/Transactions';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={{position: 'absolute', width: dimensions.width}}>
        <BalanceAndTransfer />
      </View>

      <Transactions />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
