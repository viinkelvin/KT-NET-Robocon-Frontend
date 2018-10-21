import React, {Component} from 'react';
import { StyleSheet, Text, Image, View, Alert, TextInput, TouchableOpacity  } from 'react-native';
// import { strings } from './localization';
import ImageButton from '../../shared/ImageButton';

export default class ChangeDomainScreen extends React.Component{
  constructor() {
    super();
    this.state = {
      domain: ""
    };
  }

  componentDidMount() {
    this.setState({ domain: global.domain })
  }

  _onPress() {
    console.log("asdasd");
  }

	render() {
		return(
			<View style={styles.container}>
        <Text style={styles.title}>Change Domain</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({domain: text})}
          value={this.state.domain}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this._onPress()}>
            <Text style={{ color: "white" }}>Submit</Text>
        </TouchableOpacity>
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
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    alignSelf: 'stretch',
    marginRight: 40,
    marginLeft: 40,
    textAlign: 'center',
    fontSize: 20,
  },
  button: {
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 10,
    padding: 8,
    textAlign: 'center',
    backgroundColor: "#0062cc",
  },
});