import React, { Component } from 'react';
import { 
	Text, 
	View, 
	TouchableOpacity,
	Button,
	StyleSheet } from 'react-native';
import CameraScreen from './components/Camera';
import AppContainer from './navigation/navigator';

export default class App extends Component {
	render() {
		return (
			<AppContainer />
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
