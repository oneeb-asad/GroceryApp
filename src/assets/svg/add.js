import React from "react";
import Svg, { Path, Rect } from "react-native-svg";

const Add = ({ color = "#F8F9FD", width = 36, height = 36 }) => {
  return (
    <Svg width={width} height={height} fill="none">
      <Rect width={width} height={height} fill="#FF844C" rx={8} />
      <Path
        stroke="#F8F9FD"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M23.333 18H12.667M18 12.667v10.666-10.666Z"
      />
    </Svg>
  );
};
export default Add;
