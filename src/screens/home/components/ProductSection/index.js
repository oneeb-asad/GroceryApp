import React from 'react';
import {ProductCard, Wrapper, Spacer} from '../../../../commons';
import {FlatList} from 'react-native';
import {data} from '../../../../constants';

export const ProductSection = () => {
  const render = ({item}) => {
    return <ProductCard item={item} />;
  };
  return (
    <Wrapper>
      <FlatList
        data={data?.topProducts}
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
