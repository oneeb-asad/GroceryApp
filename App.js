/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import MyTabs from './src/screens/BottomTab';
import {Provider} from 'react-redux';
import store from './Redux/store';
import Tabs from './src/navigation/Tab';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <MyTabs /> */}
        <Tabs />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
