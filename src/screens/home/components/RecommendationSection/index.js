import React from 'react';
import {Wrapper, Spacer, RecommendationCard} from '../../../../commons';
import {FlatList} from 'react-native';
import {data} from '../../../../constants';

export const RecommendationSection = () => {
  const render = ({item}) => {
    return <RecommendationCard item={item} />;
  };
  return (
    <Wrapper>
      <FlatList
        data={data?.recomendations}
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
