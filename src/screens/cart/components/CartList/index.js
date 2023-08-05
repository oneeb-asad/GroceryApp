import React from "react";
import { Wrapper, Spacer, CartCard } from "../../../../commons";
import { FlatList } from "react-native";
import { data } from "../../../../constants";

export const CartList = () => {
  const render = ({ item }) => {
    return <CartCard item={item} />;
  };
  return (
    <Wrapper>
      <FlatList
        data={data?.recomendations}
        renderItem={render}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <Spacer isBasic />}
        ListFooterComponent={() => <Spacer isBasic />}
        ItemSeparatorComponent={() => <Spacer isBasic />}
      />
    </Wrapper>
  );
};
