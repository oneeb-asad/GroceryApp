import {Home, Cart} from '../../assets/svg';
import {SCREENS} from '../../constants';

export const TabIcons = (key, color, size) => {
  switch (key) {
    case SCREENS.HOME:
      return <Home color={color} height={size} width={size} />;
    case SCREENS.CART:
      return <Cart color={color} height={size} width={size} />;
    default:
      return <Home color={color} height={size} width={size} />;
  }
};
