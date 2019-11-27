import React from 'react';
import { StyleSheet, View } from 'react-native';

const ItemSeparator = props => {
  return <View style={styles.separator} {...props} />;
};

var styles = StyleSheet.create({
  separator: {
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default ItemSeparator;
