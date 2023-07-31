import {StyleSheet} from 'react-native';
import {height, totalSize, width} from '../../helpers/dimensions';
import {fontSize, fontFamily} from '../../assets';
import {colors} from '../../constants';

export const useStyles = () => {
  const styles = StyleSheet.create({
    socialButton: {
      width: width(90),
      height: height(6),
      borderWidth: 1,
      borderRadius: 6,
      marginBottom: height(1.5),
      justifyContent: 'center',
      alignSelf: 'center',
    },
    socialIcon: {
      width: width(10),
      marginStart: width(5),
    },
    socialText: {
      width: width(60),
      alignItems: 'center',
    },
    buttonColored: {
      width: width(90),
      height: height(6),
      borderRadius: 6,
      marginBottom: height(1.5),
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
    },
    buttonSelectable: {
      height: height(6),
      borderRadius: 100,
      borderWidth: 1,
      paddingHorizontal: width(5),
      alignItems: 'center',
      justifyContent: 'center',
    },
    selectedText: {
      fontFamily: fontFamily.RalewayBold,
      fontSize: fontSize.medium,
    },
    selectableText: {
      fontFamily: fontFamily.LatoRegular,
    },
    buttonBordered: {
      width: width(90),
      height: height(6),
      // borderRadius: 6,
      marginBottom: height(1.5),
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      borderWidth: 1,
    },
    smallButtonBordered: {
      width: width(12),
      height: height(3),
      // borderRadius: 6,
      // marginBottom: height(1.5),
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      borderWidth: 1,
    },
    checkBoxWrapper: {
      height: width(6),
      width: width(6),
    },
    checkBox: {
      borderRadius: 4,
      borderWidth: 1,
      flex: 1,
    },
    socialButtonTxt: {
      fontFamily: fontFamily.RalewayMedium,
    },
    buttonTxt: {
      fontSize: totalSize(1.6),
      fontFamily: fontFamily.RalewayMedium,
    },
    smallSocialButton: {
      borderWidth: 1,
      height: width(10),
      width: width(10),
      borderRadius: 6,
      alignItems: 'center',
      justifyContent: 'center',
    },
    paymentButton: {
      width: width(90),
      height: height(6),
      borderWidth: 1,
      borderRadius: 6,
      marginBottom: height(1.5),
      justifyContent: 'center',
      alignSelf: 'center',
    },
    typeBtnText: {
      fontFamily: fontFamily.RalewayBold,
    },
    accButton: {
      width: width(90),
      height: height(8),
      borderWidth: 1,
      borderRadius: 6,
      marginBottom: height(1.5),
      justifyContent: 'center',
      alignSelf: 'center',
    },
    typeBtnIcon: {
      // width: width(10),
      alignSelf: 'center',
      alignItems: 'center',
      // marginStart: width(5),
    },
    shadow: {
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 3,
    },
    miniBtnColored: {
      justifyContent: 'center',
      alignItem: 'center',
      borderRadius: 6,
      width: totalSize(10),
      height: totalSize(3),
      backgroundColor: colors.borderColor2,
    },
    miniBtnBordered: {
      borderWidth: 1,
      justifyContent: 'center',
      alignItem: 'center',
      borderRadius: 6,
      width: totalSize(10),
      height: totalSize(3),
      borderColor: colors.borderColor2,
    },
    minibtnText: {
      textAlign: 'center',
      color: colors.textColor1,
      fontFamily: fontFamily.LatoBold,
    },
    minibtnTextColored: {
      textAlign: 'center',
      color: colors.textColor4,
      fontFamily: fontFamily.LatoBold,
    },
    addBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 16,
    },
    addBtnWrapper: {
      borderColor: colors.borderColor2,
      width: totalSize(2.2),
      height: totalSize(2.2),
      borderWidth: 1,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    addBtnTxt: {
      fontFamily: fontFamily.LatoBold,
      fontSize: fontSize.medium,
      marginHorizontal: 10,
      color: colors.textColor6,
    },
  });
  return {styles};
};
