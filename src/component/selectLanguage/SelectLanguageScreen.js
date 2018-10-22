import React, {Component} from 'react';
import { StyleSheet, Text, Image, View, Alert } from 'react-native';
// import { strings } from './localization';
import ImageButton from '../../shared/ImageButton';
import { localizationStrings } from './localization';

export default class SelectLanguageScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      data : [],
      strings: {},
    }
  }

  componentWillMount() {
    this.setState({ strings: localizationStrings() });
  }

  componentDidMount() {
  }

  _onPress(lang) {
    Alert.alert(
     'Confirmation',
      "Are your sure pick this language?",
      [
        { text: 'OK', onPress: () => this._onPressOK(lang) },
        { text: 'Cancel', onPress: () => console.log("cancel") }
      ]
    );
  }

  _onPressOK(lang) {
    global.selectedLanguage = lang;
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>asd</Text>
        <View style={styles.imgBtnContainer}>
          <ImageButton
            source={require('../../images/flag/jp.png')}
            text="japan"
            onPress={() => this._onPress('ja')}
            styleImg={styles.image} />
          <ImageButton
            source={require('../../images/flag/gb.png')}
            text="english"
            onPress={() => this._onPress('en')}
            styleImg={styles.image} />
          <ImageButton
            source={require('../../images/flag/id.png')}
            text="indonesia"
            onPress={() => this._onPress('id')}
            styleImg={styles.image} />
          <ImageButton
            source={require('../../images/flag/ph.png')}
            text="filipino"
            onPress={() => this._onPress('tl')}
            styleImg={styles.image} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
  imgBtnContainer: {
    flexDirection: 'row'
  },
  image: {
    width: 200,
    height: 100,
    borderColor: 'black',
    borderWidth: 1,
  },
});