import React, { PureComponent } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";

export default class Header extends PureComponent {
	render() {
		return (
			<View style={styles.container}>
				{this.props.back && <View style={styles.imgBackContainer}>
					<TouchableOpacity
						onPress={this.props.back}>
						<Image
							source={require('../images/icon/arrow-back-icon.png')}
							style={styles.imgBack}
						/>
					</TouchableOpacity>
				</View>}
				<View style={styles.titleContainer}>
					<Text style={styles.titleText}>{ this.props.title }</Text>
				</View>
				{this.props.back && <View style={styles.imgRightContainer}>
				</View>}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginBottom: 10,
		marginRight: -20,
		marginLeft: -20,
		borderBottomWidth: 1,
		borderBottomColor: 'black',
	},
	titleContainer: {
		flex: 1,
		alignItems: 'center',
		paddingBottom: 10,
	},
	titleText: {
		fontSize: 30,
	},
	imgBackContainer: {
		padding: 5,
		paddingLeft: 10,
	},
	imgBack: {
		width: 35,
		height: 35,
		justifyContent: 'center',
		alignItems: 'center',
	},
	imgRightContainer: {
		width: 50,
		height: 45,
	},
});