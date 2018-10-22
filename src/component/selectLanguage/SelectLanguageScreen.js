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

  componentDidMount() {
    const strings = localizationStrings();

    this.setState({ strings });
  }

  _onPress(lang) {
    const { strings } = this.state;
    Alert.alert(
     strings.confirmation,
     strings.confirmation_text,
      [
        { text: strings.ok, onPress: () => this._onPressOK(lang) },
        { text: strings.cancel, onPress: () => console.log("cancel") }
      ]
    );
  }

  _onPressOK(lang) {
    global.selectedLanguage = lang;
    this.props.navigation.navigate('Home');
  }

  render() {
    const { strings } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{strings.title}</Text>
        <View style={styles.imgBtnContainer}>
          <ImageButton
            source={require('../../images/flag/jp.png')}
            text={strings.ja}
            onPress={() => this._onPress('ja')}
            styleImg={styles.image} />
          <ImageButton
            source={require('../../images/flag/gb.png')}
            text={strings.en}
            onPress={() => this._onPress('en')}
            styleImg={styles.image} />
          <ImageButton
            source={require('../../images/flag/id.png')}
            text={strings.id}
            onPress={() => this._onPress('id')}
            styleImg={styles.image} />
          <ImageButton
            source={require('../../images/flag/ph.png')}
            text={strings.tl}
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