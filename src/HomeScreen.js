import React, {Component} from 'react';
import { Platform, StyleSheet, Text, Image, Button, View } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>first screen</Text>
        <Button
          title="go next"
          onPress={() => this.props.navigation.navigate('Language')} />
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
});