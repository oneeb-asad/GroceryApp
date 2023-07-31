import {totalSize} from '../../constants';

const fontFamily = {
  LatoLight: 'Lato-Light',
  LatoRegular: 'Lato-Regular',
  LatoBold: 'Lato-Bold',

  NotoSansLight: 'NotoSans-Light',
  NotoSansRegular: 'NotoSans-Regular',
  NotoSansMedium: 'NotoSans-Medium',
  NotoSansBold: 'NotoSans-Bold',

  PoppinsLight: 'Poppins-Light',
  PoppinsRegular: 'Poppins-Regular',
  PoppinsMedium: 'Poppins-Medium',
  PoppinsBold: 'Poppins-Bold',

  RalewayLight: 'Raleway-Light',
  RalewayRegular: 'Raleway-Regular',
  RalewayMedium: 'Raleway-Medium',
  RalewayBold: 'Raleway-Bold',

  SourceSansProLight: 'SourceSansPro-Light',
  SourceSansProRegular: 'SourceSansPro-Regular',
  SourceSansProMedium: 'SourceSansPro-SemiBold',
  SourceSansProBold: 'SourceSansPro-Bold',

  InterBold: 'Inter-Bold',
  InterMedium: 'Inter-Medium',
  InterRegular: 'Inter-Regular',
  InterLight: 'Inter-Light',
};

const fontSize = {
  h1: totalSize(4.5),
  h2: totalSize(4),
  h3: totalSize(3.5),
  h4: totalSize(3),
  h5: totalSize(2.5),
  h5A: totalSize(2.25),
  h6: totalSize(2),
  input: totalSize(1.75),
  large: totalSize(2),
  medium: totalSize(1.75),
  regular: totalSize(1.5),
  small: totalSize(1.25),
  tiny: totalSize(1),
};

export {fontFamily, fontSize};
