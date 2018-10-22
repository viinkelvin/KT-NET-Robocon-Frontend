import React, {Component} from 'react';
import { StyleSheet, Text, Image, View, Alert, TextInput, FlatList, TouchableOpacity } from 'react-native';
// import { strings } from './localization';
import ImageButton from '../../shared/ImageButton';
import { localizationStrings } from './localization';

export default class SettingScreen extends React.Component{

  constructor() {
    super();
    this.state = {
      strings: {},
      data: [
        {
          id: 1,
          text: {this.state.strings.language},
          pressAction: () => this.props.navigation.navigate('Language'),
        },
        {
          id: 2,
          text: {this.state.strings.domain},
          pressAction: () => this.props.navigation.navigate('Domain'),
        }
      ],
    };
  }

  componentWillMount() {
    this.setState({ strings: localizationStrings() });
  }

  _keyExtractor = (item, index) => item.id.toString();

  _renderItem = ({item}) => {
    return(
      <View style={styles.border}>
        <TouchableOpacity
          style={styles.listItemBtn}
          id={item.id}
          key={item.id}
          onPress={item.pressAction}
        >
          <View style={{flexDirection: 'row'}}>
            <Text
              style={styles.listItemText}
            >{item.text}</Text>
            <Image
              source={require('../../images/icon/right-icon.png')}
              style={styles.listItemIcon} />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  // _onPress = (id: string) => {
  //   console.log("asdas");
  // }

	render() {
		return(
			<View style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
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
  border: {
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 5,
  },
  listItemBtn: {
    flex: 1,
    padding: 10,
  },
  listItemText: {
    flex: 1,
    color: 'black',
  },
  listItemIcon: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 15,
  },
  resultContainer: {
    flexDirection: 'row'
  },
  textarea: {
  	flex: 1,
  	height: 500,
  	borderWidth: 1,
  	borderColor: "black",
  },
  btnImg: {
  	margin: 10,
  	marginRight: 0,
  	padding: 8,
  	borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
  },
  image: {
    width: 50,
    height: 50,    
  },
});