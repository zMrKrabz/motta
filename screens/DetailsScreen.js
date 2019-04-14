import React, { Component } from 'react';
import {
	View,
	Text,
	FlatList,
	StyleSheet,
} from 'react-native';

export default class DetailsScreen extends Component{
	constructor(props){
		super(props);
	}
	render() {
		return (
			<View style={styles.container}>
			<Button 
				onPress={this.props.navigation.navigate('Camera')}
			/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20,
		justifyContent: 'center',
	},
	listContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	list: {
		width: "100%",
	},
})