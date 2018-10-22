import React, {Component, PropTypes} from 'react';
import { Platform, StyleSheet, Text, Image, Button, View } from 'react-native';
import api from '../../lib/api';
import ImageButton from '../../shared/ImageButton';
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
    console.log(this.state.strings, "strings");
    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <ImageButton
            source={require('../../images/main-menu/check-blood-pressure.png')}
            text="Blood Pressure"
            styleBtn={styles.btnImg}
            styleImg={styles.image} />
          <ImageButton
            source={require('../../images/main-menu/room-guide.png')}
            text="Guide"
            styleBtn={styles.btnImg}
            styleImg={styles.image} />
          <ImageButton
            source={require('../../images/main-menu/graph.png')}
            text="Statistics"
            styleBtn={styles.btnImg}
            styleImg={styles.image} />
          <ImageButton
            source={require('../../images/main-menu/drugs.png')}
            text="Medicine"
            styleBtn={styles.btnImg}
            styleImg={styles.image}
            onPress={() => this.props.navigation.navigate('Medicine')} />
          <ImageButton
            source={require('../../images/main-menu/registration.png')}
            text="Receptionist"
            styleBtn={styles.btnImg}
            styleImg={styles.image}
            onPress={() => this.props.navigation.navigate('Receptionist')} />
          <ImageButton
            source={require('../../images/main-menu/result.png')}
            text="Check Result"
            styleBtn={styles.btnImg}
            styleImg={styles.image}
            onPress={() => this.props.navigation.navigate('Result')} />
          <ImageButton
            source={require('../../images/main-menu/setting.png')}
            text="Setting"
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