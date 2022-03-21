import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import dimensions from '../../constants/dimensions';
import colors from '../../constants/colors';

import Icon from 'react-native-vector-icons/Ionicons';
import Inter from '../../constants/fonts';
import {useNavigation} from '@react-navigation/native';

const CustomHeader2 = ({title = '', onPress = () => {}}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          left: dimensions.width * 0.05,
        }}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.containerIcon}>
            <Icon
              name="chevron-back"
              size={dimensions.width * 0.075}
              color={colors.whiteOff}
            />

            <Text style={styles.txtBtn}>Back</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.txtHeader}>{title}</Text>
      </View>

      <View />
    </View>
  );
};

export default CustomHeader2;

const styles = StyleSheet.create({
  container: {
    height: 68,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: dimensions.width * 0.025,
    paddingBottom: dimensions.height * 0.012,
    justifyContent: 'center',
  },
  containerIcon: {
    width: dimensions.width * 0.1,
    height: dimensions.width * 0.1,
    borderRadius: dimensions.width * 0.05,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerAddMoney: {
    paddingHorizontal: dimensions.width * 0.025,
    paddingVertical: dimensions.width * 0.015,
    backgroundColor: colors.secondary,
    borderRadius: 5,
  },
  txtHeader: {
    fontFamily: Inter.Medium500,
    color: colors.whiteOff,
    marginLeft: dimensions.width * 0.05,
    fontSize: dimensions.width * 0.04,
  },
  txtAddMoney: {
    fontFamily: Inter.Regular400,
    fontSize: dimensions.width * 0.03,
    color: colors.blue,
    marginTop: 2,
  },
  txtBtn: {
    fontFamily: Inter.Regular400,
    color: colors.whiteOff,
    fontSize: dimensions.width * 0.035,
  },
});
