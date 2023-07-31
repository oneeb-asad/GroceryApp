import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Cart = ({color = '#747B87'}) => {
  return (
    <Svg width={24} height={23} viewBox="0 0 24 23" fill="none">
      <Path
        d="M5.875.575h0-4.063a.862.862 0 100 1.725h3.356L8.28 17.857a.862.862 0 00.845.693H20.5a.862.862 0 00.843-.681h0l2.438-11.375s0 0 0 0a.862.862 0 00-.843-1.044H7.557L6.72 1.268s0 0 0 0a.863.863 0 00-.845-.693zm3.572 21.666a1.269 1.269 0 101.794-1.795 1.269 1.269 0 00-1.794 1.795zm8.125 0a1.269 1.269 0 101.794-1.795 1.269 1.269 0 00-1.794 1.795zm2.231-5.416h-9.97l-1.93-9.65H21.87l-2.068 9.65z"
        fill={color}
        stroke={color}
        strokeWidth={0.1}
      />
    </Svg>
  );
};
export default Cart;
