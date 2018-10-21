import React, { PureComponent } from 'react';
import { StyleSheet, TouchableOpacity, Text, Image } from "react-native";

export default class ImageButton extends PureComponent {
	render() {
		return (
			<TouchableOpacity
				style={[styles.button, this.props.styleBtn]}
				onPress={this.props.onPress}>
				<Image 
					source={this.props.source}
					style={this.props.styleImg}
					resizeMode="contain"
				/>
				{this.props.text && <Text style={styles.text}>{this.props.text}</Text>}
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
  text: {
  	textAlign: 'center',
  },
});