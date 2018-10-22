
import React, {Component} from 'react';
import { StyleSheet, Text, Image, View, Alert } from 'react-native';
// import { strings } from './localization';
import { Container, Content, Form, Item, Input } from 'native-base';
import Header from '../../shared/Header';

export default class ReceptionistScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      data : [],
    }
  }

  _onPressOK(lang) {
    global.selectedLanguage = lang;
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          title="asdas"
          back={() => this.props.navigation.goBack()} />
          <View>
            <Item>
              <Input placeholder="Underline Textbox" />
            </Item>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
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