import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Inter from '../../../constants/fonts';
import dimensions from '../../../constants/dimensions';
import colors from '../../../constants/colors';
import Button from '../../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import getTransformedCurrency from '../../../helper/helperFunctions';

const BalanceAndTransfer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.txtLabel}>Your current balance is</Text>
      <Text style={styles.txtBalance}>
        {'$' + getTransformedCurrency(200000)}
      </Text>

      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Button
          onPress={() => {}}
          title="Request Money"
          titleColor={colors.secondaryLight}
        />
        <View style={{width: 10}} />
        <Button
          onPress={() => {
            navigation.navigate('TransferMoney');
          }}
          title="Send Money"
          titleColor={colors.secondaryLight}
        />
      </View>
    </View>
  );
};

export default BalanceAndTransfer;

const styles = StyleSheet.create({
  container: {
    padding: dimensions.width * 0.05,
  },
  txtBalance: {
    fontFamily: Inter.Semi_Bold600,
    fontSize: dimensions.width * 0.08,
    color: colors.whiteOff,
  },
  txtLabel: {
    fontFamily: Inter.Regular400,
    color: colors.blue,
    fontSize: dimensions.width * 0.03,
  },
});
