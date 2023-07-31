import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Spacer} from '../Spacer';
import {ButtonSelectable} from '../Buttons';
import {ComponentWrapper, RowWrapperBasic, Wrapper} from '../Wrappers';
import {Text, TouchableOpacity} from '../../core-ui';
import {fontSize, fontFamily} from '../../assets';
import {colors} from '../../constants';

export const CategoriesHeader = ({title, data, onPress, withoutHeader}) => {
  const [selected, setSelected] = useState(0);

  const render = ({item, index}) => {
    const {title, img} = item;
    return (
      <ButtonSelectable
        selected={index == selected}
        onPress={() => setSelected(index)}
        text={title}
        img={img ? img : null}
      />
    );
  };
  return (
    <Wrapper>
      <Spacer isSmall />
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        horizontal
        ListHeaderComponent={() => <Spacer isBasic horizontal />}
        ListFooterComponent={() => <Spacer isBasic horizontal />}
        ItemSeparatorComponent={() => <Spacer isSmall horizontal />}
        renderItem={render}
      />
    </Wrapper>
  );
};

export const TextHeader = ({title, onPress}) => {
  const {styles} = useStyles();
  return (
    <ComponentWrapper>
      <RowWrapperBasic style={styles.row}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.showAll}>{'Show All'}</Text>
        </TouchableOpacity>
      </RowWrapperBasic>
    </ComponentWrapper>
  );
};

export const useStyles = () => {
  const styles = StyleSheet.create({
    row: {
      justifyContent: 'space-between',
      margin: 5,
    },
    title: {
      fontSize: fontSize.h4,
      fontFamily: fontFamily.RalewayBold,
      color: colors.textColor1,
    },
    showAll: {
      fontSize: fontSize.medium,
      fontFamily: fontFamily.RalewayMedium,
      color: colors.textColor1,
    },
  });
  return {styles};
};
