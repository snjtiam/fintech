import {View, Text, Image, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import dimensions from './../../constants/dimensions';
import colors from '../../constants/colors';
import Inter from '../../constants/fonts';
import Button from '../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';

const Onboarding = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <View style={styles.containerImgBackground}>
        <Image
          style={styles.imgBackground}
          resizeMode="cover"
          //   resizeMethod=''
          source={require('../../assets/images/splash.png')}
        />
      </View>

      <View style={styles.containerInfo}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <View style={[styles.indicator, {opacity: 0.8}]} />
            <View style={[styles.indicator, {width: 30}]} />
            <View style={[styles.indicator, {opacity: 0.8}]} />
          </View>
          <Text style={styles.txtTitle}>Transfer That is Safe</Text>
          <Text style={styles.txtSubtitle}>
            {'You have nothing to be scared about, we got you covered'}
          </Text>
        </View>

        <View style={{height: 48, alignSelf: 'flex-start'}}>
          <Button
            type="filled"
            title="Start banking"
            color={'white'}
            titleColor={colors.royalBlue}
            onPress={() => {
              navigation.navigate('Dashboard');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  containerImgBackground: {
    height: dimensions.height,
    width: dimensions.width,
    position: 'absolute',
    top: 0,
    left: 0,
  },

  containerInfo: {
    height: dimensions.height * 0.27,
    width: dimensions.width * 0.7,
    backgroundColor: colors.royalBlue,
    borderTopRightRadius: dimensions.width * 0.15,
    paddingHorizontal: dimensions.width * 0.05,
    paddingVertical: dimensions.width * 0.04,
    justifyContent: 'space-between',
  },

  indicator: {
    height: 6,
    width: 15,
    backgroundColor: colors.yellow,
    marginRight: 4,
    borderRadius: 3,
  },
  imgBackground: {
    height: dimensions.height,
    width: dimensions.width,
  },
  txtTitle: {
    fontSize: dimensions.width * 0.038,
    fontFamily: Inter.Semi_Bold600,
    color: colors.whiteOff,
    marginTop: dimensions.height * 0.02,
  },
  txtSubtitle: {
    fontSize: dimensions.width * 0.033,
    fontFamily: Inter.Regular400,
    color: colors.whiteOff,
  },
});
