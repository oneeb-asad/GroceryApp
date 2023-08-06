import React from "react";
import Svg, { Path } from "react-native-svg";

const Category = ({ color = "#DADCE0" }) => {
  return (
    <Svg width={30} height={30} fill="none">
      <Path
        fill={color}
        d="M7.5 4.5a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3v-3a3 3 0 0 0-3-3h-3Zm0 12a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3v-3a3 3 0 0 0-3-3h-3Zm9-9a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-3a3 3 0 0 1-3-3v-3Zm0 12a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-3a3 3 0 0 1-3-3v-3Z"
      />
    </Svg>
  );
};
export default Category;
