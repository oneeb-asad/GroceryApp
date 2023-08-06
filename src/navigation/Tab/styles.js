import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const tabs = {
  screenOptions: {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    tabBarActiveTintColor: "#013A59",
    tabBarInactiveTintColor: "#9CA3AF",
    // tabBarActiveBackgroundColor: colors.primary,
    // tabBarItemStyle: { marginHorizontal: 35, marginVertical: 12, borderRadius: 8 },
    // tabBarStyle: { position: 'absolute', bottom: 10, right: 10, left: 10, borderRadius: 8, height: 60 }
  },
};

export const useStyles = () => {
  const styles = StyleSheet.create({
    iconWrapper: {
      justifyContent: "center",
      alignItems: "center",
    },
    activeDot: {
      backgroundColor: colors.orange,
      height: 6,
      width: 6,
      borderRadius: 5,
    },
  });
  return { styles };
};
