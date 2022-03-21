import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import dimensions from '../../constants/dimensions';
import colors from '../../constants/colors';

import Icon from 'react-native-vector-icons/Ionicons';
import Inter from '../../constants/fonts';
import {useNavigation} from '@react-navigation/native';

const CustomHeader = ({title = ''}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.openDrawer();
            }}>
            <View style={styles.containerIcon}>
              {/* <Icon
                name="menu-outline"
                size={dimensions.width * 0.05}
                color={colors.redPink}
              /> */}

              <Image
                style={styles.iconImg}
                resizeMode="contain"
                //   resizeMethod=''
                source={require('../../assets/images/menu.png')}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.txtHeader}>{title}</Text>
        </View>
        <TouchableOpacity style={styles.containerAddMoney}>
          <Text style={styles.txtAddMoney}>Add money</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    height: 68,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: dimensions.width * 0.025,
    paddingBottom: dimensions.height * 0.012,
    justifyContent: 'space-between',
  },
  containerIcon: {
    width: dimensions.width * 0.1,
    height: dimensions.width * 0.1,
    borderRadius: dimensions.width * 0.05,
    backgroundColor: colors.secondary,
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
  iconImg: {
    width: dimensions.width * 0.04,
    height: dimensions.width * 0.04,
  },
});
