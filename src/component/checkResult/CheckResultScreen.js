import React, {Component} from 'react';
import { StyleSheet, Text, Image, View, Alert, TextInput } from 'react-native';
// import { strings } from './localization';
import ImageButton from '../../shared/ImageButton';

export default class CheckResultScreen extends React.Component {

	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.title}>Result of Medical Examination</Text>
				<View style={styles.resultContainer}>
					<View style={styles.textarea}>
						<TextInput
			        multiline = {true}
	         		numberOfLines = {4}
			      />
					</View>
					<View>
						<ImageButton
	            source={require('../../images/main-menu/check-blood-pressure.png')}
	            styleBtn={[styles.btnImg, {marginTop: 0}]}
	            styleImg={styles.image} />
            <ImageButton
	            source={require('../../images/main-menu/check-blood-pressure.png')}
	            styleBtn={styles.btnImg}
	            styleImg={styles.image} />
					</View>
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