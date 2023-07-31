import React from 'react';
import {StyleSheet} from 'react-native';
import {fontFamily, fontSize} from '../../assets';

export const useStyles = (size, colors) => {
  const styles = StyleSheet.create({
    row: {
      justifyContent: 'space-between',
      margin: 5,
    },
    morning: {
      fontSize: fontSize.h5,
      fontFamily: fontFamily.RalewayMedium,
    },
    userName: {
      fontSize: fontSize.h4,
      fontFamily: fontFamily.RalewayBold,
    },
    location: {
      fontSize: fontSize.medium,
      fontFamily: fontFamily.RalewayMedium,
    },
  });
  return {styles};
};
