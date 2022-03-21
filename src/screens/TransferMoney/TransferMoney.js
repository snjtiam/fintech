import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import CustomHeader2 from '../../components/CustomHeader/CustomHeader2';
import {useNavigation} from '@react-navigation/native';
import colors from './../../constants/colors';
import dimensions from '../../constants/dimensions';
import Button from '../../components/Button/Button';
import Inter from './../../constants/fonts';
import getTransformedCurrency from './../../helper/helperFunctions';

const TransferMoney = () => {
  const navigation = useNavigation();

  console.log('WIDTH', dimensions.width);

  return (
    <View style={styles.container}>
      <CustomHeader2
        onPress={() => {
          navigation.goBack();
        }}
        title="New request"
      />

      {/* AVATAR----------------------- */}
      <View style={styles.containerAvatar}>
        <View style={styles.avatarOuterRing}>
          <View style={styles.avatarInnerRing}>
            <View style={styles.avatar}>
              <Image
                style={styles.avatar}
                source={require('../../assets/images/person.jpg')}
              />
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          alignItems: 'center',
        }}>
        <Text style={styles.txtRecepientName}>Adeleke Ramon</Text>
        <Text style={styles.txtinfo}>is requesting for:</Text>
        <Text style={styles.txtAmount}>{`$${getTransformedCurrency(
          '200000',
        )}`}</Text>
      </View>

      <View
        style={{
          flexDirection: dimensions.width <= 360 ? 'row' : 'column',
          paddingHorizontal: dimensions.width * 0.05,
          height: dimensions.width <= 360 ? 74 : 74 * 2,
          marginTop: 50,
          alignItems: 'center',
        }}>
        <View style={{flex: 1, margin: 10}}>
          <Button
            type="filled"
            title="Send money"
            titleColor={'white'}
            color={colors.redPink}
          />
        </View>
        <View style={{flex: 1, margin: 10}}>
          <Button
            title="Don't send"
            titleColor={colors.secondaryLight}
            color={colors.secondaryLight}
          />
        </View>
      </View>
    </View>
  );
};

export default TransferMoney;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },

  containerAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: dimensions.height * 0.1,
  },

  avatar: {
    height: dimensions.width * 0.3,
    width: dimensions.width * 0.3,
    backgroundColor: colors.secondary,
    borderRadius: dimensions.width * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarOuterRing: {
    height: dimensions.width * 0.5,
    width: dimensions.width * 0.5,
    backgroundColor: colors.primaryLight,
    borderRadius: dimensions.width * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInnerRing: {
    height: dimensions.width * 0.4,
    width: dimensions.width * 0.4,
    backgroundColor: colors.secondary,
    borderRadius: dimensions.width * 0.22,
    alignItems: 'center',
    justifyContent: 'center',
  },

  txtRecepientName: {
    fontFamily: Inter.Medium500,
    color: colors.whiteOff,
    fontSize: dimensions.width * 0.05,
  },
  txtinfo: {
    fontFamily: Inter.Regular400,
    color: colors.whiteOff,
    fontSize: dimensions.width * 0.03,
    marginTop: dimensions.height * 0.025,
  },
  txtAmount: {
    fontFamily: Inter.Bold700,
    color: colors.whiteOff,
    fontSize: dimensions.width * 0.08,
    marginTop: dimensions.height * 0.045,
  },
});
