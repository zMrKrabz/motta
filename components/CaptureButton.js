import React, { Component } from 'react';
import {
	StyleSheet,
	Button,
	TouchableHighlight,
	View,
} from 'react-native';
import { Camera, Permissions } from 'expo';

export default class CaptureButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
		}
	}

	snap = async() => {
		try{
			let photo = await this.camera.takePictureAsync();
			this.props.navigation.navigate('LoadingScreen', {picture: picture});
		}
		catch (error) {
			console.log(error);
		}
	};

	render() {
		return (
			<View style={styles.container}>
				<TouchableHighlight style={styles.container} disabled={this.props.buttonDisabled}>
					<Button 
						onPress={() => this.snap.bind(this)} 
						disabled={this.props.buttonDisabled} 
						title="Capture" 
						accessibilityLabel="Learn more about this button"
						style={styles.captureButton}
					/>
				</TouchableHighlight>
			</View>
		)
	};
};

const styles = StyleSheet.create({
	captureButton: {
		width: 160,
		borderRadius: 10,
		backgroundColor: "black",
		alignItems: 'center',
		position: 'absolute',
		bottom: 0,
	},
	picture: {
		width: 160,
		height: 200,
		justifyContent: 'center', 
	},
	container: {
		flex: 1
	}
});