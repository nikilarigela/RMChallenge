import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const Loading = ({ indicatorProps, ...props }) => {
  return (
    <View style={styles.activityIndicator} {...props}>
      <ActivityIndicator size="large" color="black" {...indicatorProps} />
    </View>
  );
};

var styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loading;
