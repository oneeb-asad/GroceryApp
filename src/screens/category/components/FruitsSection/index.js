import React from "react";
import { FlatList } from "react-native";
import { Spacer, Wrapper, CategoryCard } from "../../../../commons";
import { data } from "../../../../constants";

export const FruitsSection = () => {
  const render = ({ item }) => {
    return <CategoryCard item={item} />;
  };
  return (
    <Wrapper>
      <FlatList
        data={data?.fruits}
        renderItem={render}
        showsHorizontalScrollIndicator={false}
        horizontal
        ListHeaderComponent={() => <Spacer isBasic horizontal />}
        ListFooterComponent={() => <Spacer isBasic horizontal />}
        ItemSeparatorComponent={() => <Spacer isBasic horizontal />}
      />
    </Wrapper>
  );
};
