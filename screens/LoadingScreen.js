import React, { Component } from 'react';
import AsyncStrorage from 'react-native-async-storage';
const Clarifai = require('clarifai');
const config = require('../config/keys.json');
import {
	View,
	Text,
	FlatList,
	StyleSheet,
	Modal,
	ActivityIndicator,
} from 'react-native';

export default class LoadingScreen extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			loading: false,
			pictureReceipt: this.props.navigation.state.params.picture,
			receiptDetails: {},
		};

		process.nextTick = setImmediate;
	};

	componentDidMount() {
		this.setState({
			loading: true,
		});
		let keys = JSON.parse(config);
		const app = new Clarifai.App({
			apiKey: keys.Clarifai.key
		});
		app.models.predict(Clarifai.GENERAL_MODEL, {base64: this.state.pictureReceipt.base64})
			.then(response => {
				console.log(response.outputs[0].data.concepts[0].name);
				this.props.navigation.navigate('DetailsScreen', {details: response});
			})
			.catch(error => {
				console.log(error);
			})
	}

	render() {
		return (
			<View style={styles.container}>
				<ActivityIndicator size="large" color="#0000ff" animating={this.state.loading}/>
			</View>
		);
	};
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 10,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})