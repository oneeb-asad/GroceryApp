import React, { useEffect } from "react";
import { MainWrapper, Spacer } from "../../commons";
import { Text } from "../../core-ui";
import { useStyles } from "./styles";

const Cart = (props) => {
  const { styles } = useStyles();
  return (
    <MainWrapper>
      <Spacer />
      <Text style={styles.title}>Cart</Text>
    </MainWrapper>
  );
};

export default Cart;
