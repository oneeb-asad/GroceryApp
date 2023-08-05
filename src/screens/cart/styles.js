import React from "react";
import { StyleSheet } from "react-native";
import { fontFamily, fontSize } from "../../assets";

export const useStyles = (size, colors) => {
  const styles = StyleSheet.create({
    title: {
      fontSize: fontSize.h4,
      fontFamily: fontFamily.RalewayBold,
      textAlign: "center",
    },
  });
  return { styles };
};
