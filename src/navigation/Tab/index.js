import * as React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/home';
import Cart from '../../screens/cart';
import {Spacer} from '../../commons';
import {SCREENS} from '../../constants';
import {TabIcons} from '../../helpers';
import {tabs, useStyles} from './styles';
import {colors} from '../../constants';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  const {styles} = useStyles();
  // const { colors } = useTheme()
  const TabData = [
    {route: SCREENS.HOME, component: HomeScreen},
    {route: SCREENS.CART, component: Cart},
    // { route: SCREENS.STREAMSTACK, component: Streamings },
    // { route: SCREENS.VAULTSTACK, component: Vault },
    // { route: SCREENS.PROFILESTACK, component: ProfileStack },
  ];
  const iconSize = 20;
  return (
    <Tab.Navigator screenOptions={tabs.screenOptions}>
      {TabData.map((_, index) => {
        return (
          <Tab.Screen
            key={index}
            name={_?.route}
            component={_.component}
            options={{
              tabBarIcon: ({focused}) => {
                return (
                  <View style={styles.iconWrapper}>
                    {TabIcons(_?.route, colors.textColor11, iconSize)}
                    <Spacer isTiny />
                    <View style={focused && styles.activeDot} />
                  </View>
                );
              },
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}
