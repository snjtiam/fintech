import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Inter from '../../../constants/fonts';
import dimensions from '../../../constants/dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../../constants/colors';

let STATUS = {
  received: 'received',
  sent: 'sent',
  failed: 'failed',
};

const StatusComponent = ({status = ''}) => {
  return (
    <View
      style={[
        styles.containerStatusComponent,
        {
          backgroundColor:
            status == STATUS.sent
              ? colors.yellow
              : status == STATUS.failed
              ? colors.red
              : colors.green,
        },
      ]}>
      <Icon
        name={
          status == STATUS.sent
            ? 'checkmark-circle'
            : status == STATUS.failed
            ? 'alert-circle'
            : 'checkmark-done-circle'
        }
        size={dimensions.width * 0.035}
        color={colors.whiteOff}
      />
      <Text style={styles.txtStatus}>
        {status[0].toUpperCase() + status.slice(1, status.length)}
      </Text>
    </View>
  );
};

const TransactionTile = ({name, amount, status, index}) => {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: index % 2 == 0 ? colors.primary : colors.secondary},
      ]}>
      <View style={styles.containerNameAndStatus}>
        <Image
          style={styles.avatar}
          source={require('../../../assets/images/person.jpg')}
        />

        <View style={{marginLeft: 15}}>
          <Text style={styles.txtName}>{name}</Text>
          <StatusComponent status={status} />
        </View>
      </View>
      <Text
        style={[
          styles.txtAmount,
          {
            color:
              status == STATUS.sent
                ? colors.yellow
                : status == STATUS.failed
                ? colors.red
                : colors.green,
          },
        ]}>
        ${amount}
      </Text>
    </View>
  );
};

export default TransactionTile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: dimensions.width * 0.03,
    paddingHorizontal: dimensions.width * 0.05,
    backgroundColor: colors.secondary,
  },
  containerNameAndStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerStatusComponent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2.5,
    paddingHorizontal: 7.5,
    paddingVertical: 1.5,
    backgroundColor: colors.green,
    alignSelf: 'flex-start',
    borderRadius: 25,
  },
  avatar: {
    height: dimensions.width * 0.12,
    width: dimensions.width * 0.12,
    borderRadius: (dimensions.width * 0.12) / 2,
  },
  txtName: {
    fontFamily: Inter.Medium500,
    fontSize: dimensions.width * 0.035,
    color: colors.whiteOff,
  },
  txtStatus: {
    fontFamily: Inter.Medium500,
    fontSize: dimensions.width * 0.03,
    marginHorizontal: 5,
    marginTop: 2,
    color: colors.whiteOff,
  },
  txtAmount: {
    fontFamily: Inter.Medium500,
    fontSize: dimensions.width * 0.035,
  },
});
