import React from 'react';
import {StyleSheet} from 'react-native';
import {Wrapper} from '../Wrappers';
import {colors} from '../../constants';
import {Image} from '../../core-ui/Image';
import {appImages} from '../../assets/images';
import {width} from '../../helpers/dimensions';

export const Avatar = ({size, radius, uri}) => {
  const imgSize = size ?? width(12);
  const {styles} = useStyles(imgSize, colors);
  return (
    <Wrapper style={[styles.avatar]}>
      <Image
        src={uri ? {uri: uri} : appImages.user}
        height={imgSize}
        width={imgSize}
        borderRadius={radius ?? imgSize / 2}
      />
    </Wrapper>
  );
};

const useStyles = (size, colors) => {
  const styles = StyleSheet.create({
    avatar: {
      //   borderWidth: 2,
      //   borderColor: colors.borderColor2,
      backgroundColor: '#F4F4FC',
      height: size + 10,
      width: size + 10,
      //   borderRadius: size,
      margin: 5,
      padding: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  return {styles};
};
