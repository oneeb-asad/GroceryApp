import React from "react";
import Svg, { Path } from "react-native-svg";

const Home = ({ color = "#DADCE0" }) => {
  return (
    <Svg width={26} height={26} fill="none">
      <Path
        fill={color}
        d="M14.131.669a1.6 1.6 0 0 0-2.262 0l-11.2 11.2A1.6 1.6 0 0 0 2.93 14.13l.469-.469V24.2A1.6 1.6 0 0 0 5 25.8h3.2a1.6 1.6 0 0 0 1.6-1.6V21a1.6 1.6 0 0 1 1.6-1.6h3.2a1.6 1.6 0 0 1 1.6 1.6v3.2a1.6 1.6 0 0 0 1.6 1.6H21a1.6 1.6 0 0 0 1.6-1.6V13.662l.469.47a1.6 1.6 0 0 0 2.262-2.263l-11.2-11.2Z"
      />
    </Svg>
  );
};
export default Home;
