import {TouchableOpacity as RNTouchableOpacity} from 'react-native';
import React from 'react';

export const TouchableOpacity = ({onPress, children, disabled, style}) => {
  return (
    <RNTouchableOpacity
      style={style}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.9}>
      {children}
    </RNTouchableOpacity>
  );
};
