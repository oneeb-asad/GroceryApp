import React from "react";
import { ComponentWrapper, RowWrapperBasic, Wrapper } from "../Wrappers";
import { Text, Image, TouchableOpacity } from "../../core-ui";
import { Add } from "../../assets";
import { Spacer } from "../Spacer";
import { useStyles } from "./styles";
import { totalSize } from "../../constants";

export const ProductCard = ({ item, wrapperStyle, onAdd }) => {
  const { styles } = useStyles();
  return (
    <Wrapper style={[styles.wrapper, wrapperStyle]}>
      <Image style={styles.productImage} src={item?.img} />
      <Spacer isSmall />
      <Text style={styles.title}>{item?.name}</Text>
      <Text style={styles.text}>{`weight ${item?.weight}`}</Text>
      <RowWrapperBasic style={styles.spaceBetween}>
        <Text style={styles.text}>{item?.price}</Text>
        <TouchableOpacity style={styles.margin} onPress={onAdd}>
          <Add />
        </TouchableOpacity>
      </RowWrapperBasic>
      <Spacer isSmall />
    </Wrapper>
  );
};

export const RecommendationCard = ({ item, wrapperStyle, onAdd }) => {
  const { styles } = useStyles();
  return (
    <RowWrapperBasic style={[styles.recommendedWrapper, wrapperStyle]}>
      <Image style={styles.recommendedImage} src={item?.img} />
      <Spacer isSmall />
      <ComponentWrapper>
        <Text style={styles.recommendedTitle}>{item?.name}</Text>
        <Text style={styles.recommendedText}>{`weight ${item?.weight}`}</Text>
        <Text style={styles.recommendedText}>{item?.price}</Text>
      </ComponentWrapper>
      <TouchableOpacity style={styles.margin} onPress={onAdd}>
        <Add />
      </TouchableOpacity>
      <Spacer isSmall />
    </RowWrapperBasic>
  );
};
export const CartCard = ({ item, wrapperStyle, onAdd }) => {
  const { styles } = useStyles();
  return (
    <RowWrapperBasic style={[styles.cartWrapper, wrapperStyle]}>
      <ComponentWrapper>
        <Image style={styles.recommendedImage} src={item?.img} />
        <Text style={styles.recommendedText}>{`weight ${item?.weight}`}</Text>
      </ComponentWrapper>

      <Spacer isSmall />
      <ComponentWrapper>
        <Text style={styles.recommendedTitle}>{item?.name}</Text>

        <Text style={styles.recommendedText}>{item?.price}</Text>
      </ComponentWrapper>
      <TouchableOpacity style={styles.margin} onPress={onAdd}>
        <Add />
      </TouchableOpacity>
      <Spacer isSmall />
    </RowWrapperBasic>
  );
};
export const CategoryCard = ({ item, onAdd }) => {
  const { styles } = useStyles();
  const iconSize = totalSize(4);
  return (
    <Wrapper style={styles.categoryWrapper}>
      <Image
        style={styles.categoryImage}
        src={item?.img}
        resizeMode="contain"
      />
      <Spacer isSmall />
      <Text style={styles.title}>{item?.name}</Text>
      <Text style={styles.text}>{`weight ${item?.weight}`}</Text>
      <RowWrapperBasic style={styles.spaceBetween}>
        <Text style={styles.text}>{item?.price}</Text>
        <TouchableOpacity style={styles.margin} onPress={onAdd}>
          <Add />
        </TouchableOpacity>
      </RowWrapperBasic>
      <Spacer isSmall />
    </Wrapper>
  );
};
