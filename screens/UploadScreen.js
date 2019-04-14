import React, { Component } from 'react';
import {
	View,
	Text,
	FlatList,
	StyleSheet,
} from 'react-native';
import { uploadContainer } from '../navigation/navigator';

export default class UploadScreen extends Component {
	render() {
		return (
			<View >
				<uploadContainer />
			</View>
		)
	}
}