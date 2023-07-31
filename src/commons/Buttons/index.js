import React from 'react';
import {Image, Text, TouchableOpacity} from '../../core-ui';
import {colors, totalSize} from '../../constants';
import {useStyles} from './styles';
import {RowWrapperBasic} from '../Wrappers';
import {Spacer} from '../Spacer';

export const ButtonSelectable = ({
  onPress,
  text,
  img,
  disabled,
  style,
  selected,
}) => {
  const {styles} = useStyles();
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.buttonSelectable,
        {
          // borderColor: !selected ? colors.borderColor8 : 'transparent',
          // backgroundColor: selected ? colors.buttonColor3 : colors.buttonColor4,
          borderColor: colors.borderColor8,
          backgroundColor: colors.backgroudColor4,
        },
        style,
      ]}
      onPress={onPress}>
      <RowWrapperBasic>
        {img && (
          <Image
            src={img}
            style={{width: totalSize(3), height: totalSize(3)}}
          />
        )}
        <Spacer isSmall horizontal />
        <Text
          // style={selected ? styles.selectedText : styles.selectableText}
          style={styles.selectedText}
          // color={selected ? colors.textColor4 : colors.textColor1}
          color={colors.textColor18}>
          {text}
        </Text>
      </RowWrapperBasic>
    </TouchableOpacity>
  );
};
