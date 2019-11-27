import React from 'react';
import { Text } from 'react-native';

const ListEmpty = ({ text, ...props }) => {
  return <Text {...props}>{text || 'No data Found'}</Text>;
};

export default ListEmpty;
