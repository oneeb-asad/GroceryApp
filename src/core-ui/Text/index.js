import {Text as RNText} from 'react-native';
import {colors} from '../../constants';

export const Text = ({
  style,
  onPress,
  children,
  color,
  textDecorationLine,
  textDecorationColor,
}) => {
  return (
    <RNText
      style={[
        {color: color ?? colors.textColor1},
        style,
        textDecorationLine,
        textDecorationColor,
      ]}
      onPress={onPress}>
      {children}
    </RNText>
  );
};
