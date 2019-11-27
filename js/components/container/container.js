import React from 'react';
import { StyleSheet, View } from 'react-native';

const Container = ({ padder, style, children, ...props }) => {
  return (
    <View
      style={[
        styles.container,
        padder ? { paddingHorizontal: 8 } : {},
        { ...style },
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Container;
