import {Image as RNImage} from 'react-native';
import {height, totalSize, width} from '../../helpers/dimensions';

export const Image = ({
  src,
  resizeMode,
  style,
  height,
  width,
  borderRadius,
}) => {
  const defaultSize = totalSize(20);
  return (
    <RNImage
      source={src}
      resizeMode={resizeMode}
      style={[
        {
          height: height ?? defaultSize,
          width: width ?? defaultSize,
          borderRadius: borderRadius,
        },
        style,
      ]}
    />
  );
};
