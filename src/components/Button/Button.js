import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import dimensions from '../../constants/dimensions';
import Inter from '../../constants/fonts';

const Button = ({
  title = '',
  type = 'outline',
  titleColor,
  color = colors.secondary,
  onPress = () => {},
}) => {
  console.log('PROPS', type);

  if (type === 'filled') {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={onPress}
          style={[
            styles.container,
            styles.containerBtnFilled,
            {backgroundColor: color},
          ]}>
          <Text style={[styles.txtButton, {color: titleColor}]}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={onPress}
          style={[
            styles.container,
            styles.containerBtnOutline,
            {borderColor: color},
          ]}>
          <Text style={[styles.txtButton, {color: titleColor}]}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    minWidth: 120,
    height: 54,
    flex: 1,
  },
  containerBtnOutline: {
    borderWidth: 1,
    borderColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerBtnFilled: {
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtButton: {
    fontFamily: Inter.Regular400,
    color: 'black',
  },
});

export default Button;
