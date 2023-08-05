import React from "react";
import { MainWrapper, Spacer, ComponentWrapper } from "../../commons";
import { Text } from "../../core-ui";
import { useStyles } from "./styles";
import { CartList } from "./components";

const Cart = (props) => {
  const { styles } = useStyles();
  return (
    <MainWrapper>
      <Spacer />
      <Text style={styles.title}>Cart</Text>
      <Spacer />
      <ComponentWrapper>
        <CartList />
      </ComponentWrapper>
    </MainWrapper>
  );
};

export default Cart;
