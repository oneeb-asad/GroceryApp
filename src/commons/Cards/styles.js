import { StyleSheet } from "react-native";
import { colors } from "../../constants";
import { height, width } from "../../helpers/dimensions";
import { fontSize, fontFamily } from "../../assets";

export const useStyles = () => {
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
    categoryWrapper: {
      width: width(35),
      height: height(30),
      backgroundColor: colors.backgroudColor4,
      borderWidth: 1,
      borderColor: colors.backgroudColor4,
      borderRadius: 12,
      elevation: 5,
      margin: 5,
    },
    categoryImage: {
      borderRadius: 6,
      height: height(15),
      width: "100%",
      alignSelf: "center",
    },
  });
  return { styles };
};
