import { Camera, Permissions } from 'expo';
const Clarifai = require('clarifai');
const keys = require('../config/keys.json')
import React from 'react';
import { 
	Text, 
	View, 
	TouchableOpacity,
	Button,
	StyleSheet } from 'react-native';
import CaptureButton from './CaptureButton'

export default class CameraScreen extends React.Component {
	state = {
		hasCameraPermission: null,
		type: Camera.Constants.Type.back,
	};

	async componentDidMount() {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasCameraPermission: status === 'granted' });
	}

	render() {
		const { hasCameraPermission } = this.state;
		if (hasCameraPermission === null) {
			return <View />;
		} else if (hasCameraPermission === false) {
			return <Text>No access to camera</Text>;
		} else {
			return (
			<View style={{ flex: 1 }}>
				<Camera style={styles.container} type={this.state.type} ref={ref => { this.camera = ref;}}>
					<CaptureButton />
				</Camera>
			</View>
			);
		}
	}
	
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 625,
	},
});
