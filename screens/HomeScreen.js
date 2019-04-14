import React, { Component } from 'react';
import AsyncStrorage from 'react-native-async-storage';
import {
	View,
	Text,
	FlatList,
	StyleSheet,
} from 'react-native';
import Dripdown from '../components/Dripdown';

export default class HomeScreen extends Component {
	/*
		receipt schema
		{
			uri: 'data://',
			base64: base64 hash
			details: {
				store: String,
				items: [
					{"item": '',
					"price": Int ex: 100 is $1
					}
				]
				date: new Date();
			}
		}
	*/
	state = {
		receipts: [],
		currentlyViewing: -1,
		display: 'monthly', // daily/weekly/monthly/yearly
		currentAmount: 0,
		daily: 0,
		weekly: 0,
		monthly: 0,
		yearly: 0,
	};

	getHistory = async (days) => {
		try {
			// get all the items within the last _ days
			// depending on the state, it will be 1/7/30/365
			const value = await AsyncStrorage.getItem('history');
			let timePeriod = this.props.timePeriod;
			let history = value.find();
			let historyTotal = history.forEach(oneReceipt => {
				oneReceipt.items.forEach(one => {
					let price = one.price;
					// add this bitch
				});
			});
			this.setState({
				daily: historyTotal
			})
			return history;
		} catch (error) {
			console.log(error);
			alert(error);
		};
	};

	addReceipt = async (receipt) => {
		try {
			let allReceipts = this.state.receipts;
			allReceipts.push(receipt);
			let newReceipts = await AsyncStrorage.setItem('RECEIPTS', allReceipts);
			this.setState({
				receipts: newReceipts,
			});
		} catch (error) {
			console.log(error);
		};
	};

	deleteReceipt = async (receipt) => {
		try {
			let allReceipts = this.state.receipts;
			let i = allReceipts.indexOf(receipt);
			allReceipts.splice(i, 1);
			await AsyncStrorage.setItem('RECEIPTS', allReceipts);

		} catch(error) {
			console.log(error);
			
		};
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.container}>
					<Text >{this.state.currentlyDisplay} Amount</Text>
					<Text >{this.state.display}</Text>
				</View>
				<Dripdown />
				<FlatList
					style={styles.list}
					data={this.state.receipts}
					renderItem={( item, index ) => 
						<View style={styles.container}>
							<Text style={styles.listItem}>
								{item.details.store}
							</Text>
							<Button />
						</View>
					}
				/>
			</View>
		);
	};
};

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