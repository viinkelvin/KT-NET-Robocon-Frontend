
import React, {Component} from 'react';
import { StyleSheet, Text, Image, View, Alert } from 'react-native';
// import { strings } from './localization';
import { Container, Header, Content, Form, Item, Input } from 'native-base';

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
      <Container>
        <Content>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>
        </Content>
      </Container>
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