import React from "react";
import Svg, { Path } from "react-native-svg";

const Cart = ({ color = "#DADCE0" }) => {
  return (
    <Svg width={30} height={30} fill="none">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3.75 3.75h2.5l.5 2.5-3-2.5Zm5 12.5h12.5l5-10H6.75l2 10Zm0 0-2-10 2 10Zm0 0-2.866 2.866c-.788.788-.23 2.134.883 2.134H21.25l-12.5-5Zm12.5 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-10 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0v0Z"
      />
    </Svg>
  );
};
export default Cart;
