import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Button, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import SplashScreen from './src/SplashScreen';
import HomeScreen from './src/component/home/HomeScreen';
import SelectLanguageScreen from './src/component/selectLanguage/SelectLanguageScreen';
import CheckResultScreen from './src/component/checkResult/CheckResultScreen';
import MedicineScreen from './src/component/medicine/MedicineScreen';
import SettingScreen from './src/component/setting/SettingScreen';
import ChangeDomainScreen from './src/component/changeDomain/ChangeDomainScreen';
import ReceptionistScreen from './src/component/receptionist/ReceptionistScreen';

import TestCamera from './src/component/testCamera';
type Props = {};
/* GLOBAL VARIABLE */
global.domain = "192.168.10.29:5000";
global.selectedLanguage = "";
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
    Result: CheckResultScreen,
    Medicine: MedicineScreen,
    Setting: SettingScreen,
    Camera: TestCamera,
    Domain: ChangeDomainScreen,
    Receptionist: ReceptionistScreen,
  }, StackOptions
);

export default RootStack;
