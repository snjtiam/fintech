import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import dimensions from '../../../constants/dimensions';
import Inter from '../../../constants/fonts';
import colors from '../../../constants/colors';
import data from '../../../dummyData';
import TransactionTile from './TransactionTile';
import getTransformedCurrency from './../../../helper/helperFunctions';

const Transactions = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpanded = () => {
    console.log('EXPANDED');
    setIsExpanded(!isExpanded);
  };

  return (
    <View
      style={[
        styles.container,
        {
          height: isExpanded ? dimensions.height - 100 : null,
        },
      ]}>
      <View style={styles.actionBtn}>
        <Pressable
          hitSlop={{bottom: 50, left: 20, right: 20, top: 50}}
          onPress={handleExpanded}
          style={{flex: 1}}
        />
      </View>

      <View style={styles.containerHeader}>
        <Text style={styles.txtTitle}>All Transactions</Text>
        <View>
          <Text style={styles.txtSubTitle}>Sort by:</Text>
        </View>
      </View>

      <View style={{flex: 1}}>
        <FlatList
          style={{height: 100}}
          contentContainerStyle={{paddingBottom: 50}}
          data={data.transactionData}
          // ItemSeparatorComponent={() => <View style={{height: 25}} />}
          renderItem={({item, index}) => (
            <TransactionTile
              {...item}
              index={index}
              amount={getTransformedCurrency(item.amount)}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  container: {
    paddingVertical: dimensions.height * 0.015,
    backgroundColor: colors.primaryLight,
    //     flex: 1,
    minHeight: dimensions.height * 0.5,
    width: dimensions.width,
    borderTopLeftRadius: dimensions.width * 0.05,
    borderTopRightRadius: dimensions.width * 0.05,
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 9999,
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: dimensions.width * 0.05,
  },
  actionBtn: {
    height: 5,
    width: 58,
    backgroundColor: colors.secondaryLight,
    borderRadius: 5,
    alignSelf: 'center',
    marginVertical: 5,
  },
  txtTitle: {
    fontFamily: Inter.Regular400,
    fontSize: dimensions.width * 0.035,
    color: colors.whiteOff,
  },
  txtSubTitle: {
    fontFamily: Inter.Regular400,
    fontSize: dimensions.width * 0.03,
    color: colors.secondaryLight,
  },
});
