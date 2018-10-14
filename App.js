import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Button, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import SplashScreen from './src/SplashScreen';
import HomeScreen from './src/HomeScreen';
import SelectLanguageScreen from './src/SelectLanguageScreen';

type Props = {};
class App extends Component<Props> {
  render() {
    return <RootStack />
  }
}

const StackOptions = {
  "initialRouteName" : 'SplashScreen',
  "headerMode" : 'none',
};

const RootStack = createStackNavigator({
    SplashScreen: SplashScreen,
    Home: HomeScreen,
    Language: SelectLanguageScreen,
  }, StackOptions
);

export default RootStack;
