
import React, {Component} from 'react';
import { StyleSheet, Text, Image, View, Alert } from 'react-native';
// import { strings } from './localization';
import { Container, Content, Form, Item, Input, Label, Button, DatePicker } from 'native-base';
import Header from '../../shared/Header';
import { localizationStrings } from './localization';

export default class ReceptionistScreen extends React.Component {
  constructor() {
    super();
    this.setDate = this.setDate.bind(this);
    this.state = {
      data : [],
      strings : {},
      chosenDate: new Date() ,
    }
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  componentWillMount() {
    this.setState({ strings: localizationStrings() });
  }
  _onPressOK(lang) {
    global.selectedLanguage = lang;
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          title={this.state.strings.title}
          back={() => this.props.navigation.goBack()} />
          <View>
            <Item floatingLabel style={styles.inputText}>
              <Label>{this.state.strings.firstName}</Label>
              <Input />
            </Item>
            <Item floatingLabel style={styles.inputText}>
              <Label>{this.state.strings.lastName}</Label>
              <Input />
            </Item>
            <Item floatingLabel style={styles.inputText}>
              <Label>{this.state.strings.address}</Label>
              <Input />
            </Item>
            <Item floatingLabel style={styles.inputText}>
              <Label>{this.state.strings.idCardNo}</Label>
              <Input />
            </Item>
            <Text>
              {this.state.strings.birthdate}
            </Text>
            <DatePicker
              defaultDate={new Date(2018, 4, 4)}
              minimumDate={new Date(1900, 1, 1)}
              maximumDate={new Date(2018, 12, 31)}
              locale={"en"}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"default"}
              placeHolderText="Select Birthday"
              // textStyle={{ color: "green" }}
              placeHolderTextStyle={{ color: "#d3d3d3" }}
              onDateChange={this.setDate}
            />
            
            <Button primary style={styles.submitButton}><Text> {this.state.strings.submit} </Text></Button>
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
  inputText: {
    marginBottom:30,
  },
  submitButton: {
    backgroundColor:'#89b6ff',
  }
});