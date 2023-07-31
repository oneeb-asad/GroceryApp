import {StyleSheet} from 'react-native';
// import { colors } from '@constants'
import {width} from '../../helpers/dimensions';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: colors.backgroundColor1,
  },
  fullScreenWrapper: {
    flex: 1,
    backgroundColor: '#121212',
  },
  compContainer: {
    marginHorizontal: width(5),
    // alignItems: 'center',
    // marginVertical: height(2.5)
  },
  rowCompContainer: {
    marginHorizontal: width(5),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginVertical: height(2.5)
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
