import { StyleSheet } from "react-native";
import { fontFamily, fontSize } from "../../assets";

export const useStyles = (size, colors) => {
  const styles = StyleSheet.create({
    row: {
      justifyContent: "space-between",
      margin: 5,
    },
    title: {
      fontSize: fontSize.h4,
      fontFamily: fontFamily.RalewayBold,
    },
    showAll: {
      fontSize: fontSize.medium,
      fontFamily: fontFamily.RalewayLight,
    },
  });
  return { styles };
};
