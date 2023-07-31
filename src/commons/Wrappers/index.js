import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {colors} from '../../constants/colors';
import {useTheme} from '@react-navigation/native';

export const FullScreenWrapper = ({children, style}) => {
  return (
    <View style={[styles.fullScreenWrapper, style]}>
      <StatusBar hidden />
      {children}
    </View>
  );
};

export const MainWrapper = ({children, style}) => {
  // const {colors} = useTheme();
  return (
    <SafeAreaView
      style={[
        styles.mainContainer,
        {backgroundColor: colors.backgroundColor9},
        style,
      ]}>
      {children}
    </SafeAreaView>
  );
};

export const ScrollWrapper = ({children, style}) => {
  // const { colors }: any = useTheme()
  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      style={[style]}>
      {children}
    </KeyboardAwareScrollView>
  );
};

export const ComponentWrapper = ({children, style, animation, duration}) => {
  return (
    <Animatable.View
      animation={animation}
      duration={duration}
      style={[styles.compContainer, style]}>
      {children}
    </Animatable.View>
  );
};

export const Wrapper = ({children, style, flex, animation, duration}) => {
  return (
    <Animatable.View
      animation={animation}
      duration={duration}
      style={[{flex: flex}, style]}>
      {children}
    </Animatable.View>
  );
};

export const RowWrapper = ({children, style}) => {
  return (
    <Animatable.View style={[styles.rowCompContainer, style]}>
      {children}
    </Animatable.View>
  );
};

export const RowWrapperBasic = ({children, style, animation, duration}) => {
  return (
    <Animatable.View
      animation={animation}
      duration={duration}
      style={[styles.rowView, style]}>
      {children}
    </Animatable.View>
  );
};
