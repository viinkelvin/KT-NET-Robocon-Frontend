import React, {Component, PropTypes} from 'react';
import { Platform, StyleSheet, Text, Image, Button, View } from 'react-native';
import api from '../../lib/api';
import ImageButton from '../../shared/ImageButton';
import Header from '../../shared/Header';
import { localizationStrings } from './localization';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      strings: {},
    }
  }

  componentWillMount() {
    this.setState({ strings: localizationStrings() });
  }
  
	componentDidMount() {
	}

  render() {
    const { strings } = this.state;
    return (
      <View style={styles.container}>
        <Header
          title={strings.title} />
        <View style={styles.imgContainer}>
          <ImageButton
            source={require('../../images/main-menu/check-blood-pressure.png')}
            text={this.state.strings.imgCheckBlood}
            styleBtn={styles.btnImg}
            styleImg={styles.image} />
          <ImageButton
            source={require('../../images/main-menu/room-guide.png')}
            text={this.state.strings.imgGuild}
            styleBtn={styles.btnImg}
            styleImg={styles.image} />
          <ImageButton
            source={require('../../images/main-menu/graph.png')}
            text={this.state.strings.imgGraph}
            styleBtn={styles.btnImg}
            styleImg={styles.image} />
          <ImageButton
            source={require('../../images/main-menu/drugs.png')}
            text={this.state.strings.imgMedicine}
            styleBtn={styles.btnImg}
            styleImg={styles.image}
            onPress={() => this.props.navigation.navigate('Medicine')} />
          <ImageButton
            source={require('../../images/main-menu/registration.png')}
            text={this.state.strings.imgReceptionist}
            styleBtn={styles.btnImg}
            styleImg={styles.image}
            onPress={() => this.props.navigation.navigate('Receptionist')} />
          <ImageButton
            source={require('../../images/main-menu/result.png')}
            text={this.state.strings.imgResult}
            styleBtn={styles.btnImg}
            styleImg={styles.image}
            onPress={() => this.props.navigation.navigate('Result')} />
          <ImageButton
            source={require('../../images/main-menu/setting.png')}
            text={this.state.strings.imgSetting}
            styleBtn={styles.btnImg}
            styleImg={styles.image}
            onPress={() => this.props.navigation.navigate('Setting')} />
          <ImageButton
            source={{uri: "https://cdn.onlinewebfonts.com/svg/img_469256.png"}}
            text="test Camera"
            styleBtn={styles.btnImg}
            styleImg={styles.image}
            onPress={() => this.props.navigation.navigate('Camera')} />
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
  imgContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  btnImg: {
    paddingRight: 20,
  },
  image: {
    width: 100,
    height: 120,
  }
});