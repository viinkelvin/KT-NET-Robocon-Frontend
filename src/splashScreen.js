import React, {Component} from 'react';
import { Platform, StyleSheet, Text, Image, View } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

export default class SplashScreen extends React.Component {
	componentDidMount() {
		setTimeout(() => {
			const resetAction = StackActions.reset({
			  index: 0,
			  actions: [NavigationActions.navigate({ routeName: 'Home' })],
			});
			this.props.navigation.dispatch(resetAction);
		}, 2000);
	}

	render() {
		return (
			<View style={styles.container}>
				<Image
          source={require('./images/launcher.png')}
        />
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});