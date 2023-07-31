import React from 'react';
import {
  ComponentWrapper,
  MainWrapper,
  RowWrapperBasic,
  ScrollWrapper,
} from '../../commons/Wrappers';
import {Text} from '../../core-ui';
import {
  Spacer,
  Avatar,
  CategoriesHeader,
  TextHeader,
  RecommendationCard,
} from '../../commons';
import {useStyles} from './styles';
import {totalSize} from '../../constants';
import {data} from '../../constants';
import {ProductSection, RecommendationSection} from './components';

const HomeScreen = () => {
  const {styles} = useStyles();
  return (
    <MainWrapper>
      <Spacer />
      <Spacer />
      <ScrollWrapper>
        <RowWrapperBasic style={styles.row}>
          <ComponentWrapper>
            <Text style={styles.morning}>Good Morning</Text>
            <Text style={styles.userName}>Oneeb</Text>
            <Text style={styles.location}>Rawalpindi , Pakistan</Text>
          </ComponentWrapper>
          <Avatar size={totalSize(8)} />
        </RowWrapperBasic>
        <Spacer />
        <CategoriesHeader data={data?.products} />
        <Spacer />
        <TextHeader title={'Top Products'} />
        <Spacer />
        <ProductSection />
        <Spacer />
        <TextHeader title={'Top Recommendations'} />
        <Spacer />
        {/* <RecommendationSection /> */}
        <RecommendationSection />
        <Spacer />
      </ScrollWrapper>
    </MainWrapper>
  );
};

export default HomeScreen;
