import React from "react";
import { StyleSheet } from "react-native";
import { ComponentWrapper, RowWrapperBasic, Wrapper } from "../Wrappers";
import { Text, Image, TouchableOpacity } from "../../core-ui";
import { height, width } from "../../helpers/dimensions";
import { Add, fontFamily, fontSize } from "../../assets";
import { Spacer } from "../Spacer";
import { colors } from "../../constants";

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

const useStyles = () => {
  const styles = StyleSheet.create({
    wrapper: {
      width: width(40),
      backgroundColor: colors.backgroudColor4,
      borderWidth: 1,
      borderColor: colors.backgroudColor4,
      borderRadius: 12,
      elevation: 5,
      margin: 5,
    },
    productImage: {
      borderRadius: 6,
      height: height(20),
      width: "50%",
      alignSelf: "center",
    },
    title: {
      color: colors.textColor1,
      fontFamily: fontFamily.RalewayBold,
      fontSize: fontSize.h5A,
      marginHorizontal: width(4),
    },
    text: {
      color: colors.textColor1,
      fontFamily: fontFamily.RalewayMedium,
      fontSize: fontSize.medium,
      marginHorizontal: width(4),
    },
    spaceBetween: {
      justifyContent: "space-between",
    },
    margin: {
      marginHorizontal: width(2),
    },
    recommendedWrapper: {
      width: width(60),
      height: height(15),
      backgroundColor: colors.backgroudColor4,
      borderWidth: 1,
      borderColor: colors.backgroudColor4,
      borderRadius: 12,
      elevation: 5,
      margin: 5,
    },
    recommendedImage: {
      borderRadius: 6,
      height: height(10),
      width: width(15),
    },
    recommendedTitle: {
      color: colors.textColor1,
      fontFamily: fontFamily.RalewayBold,
      fontSize: fontSize.h5A,
    },
    recommendedText: {
      color: colors.textColor1,
      fontFamily: fontFamily.RalewayMedium,
      fontSize: fontSize.medium,
    },
    cartWrapper: {
      width: width(86),
      height: height(20),
      backgroundColor: colors.backgroudColor4,
      borderWidth: 1,
      borderColor: colors.backgroudColor4,
      borderRadius: 12,
      elevation: 5,
      margin: 5,
    },
  });
  return { styles };
};
