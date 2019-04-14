import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';

export default class Dripdown extends Component {
	state = {
		timePeriod: '',
	}
	render() {
		let data = [{
			value: 'Daily',
		}, {
			value: 'Weekly',
		}, {
			value: 'Monthly',
		}];

		return (
			<Dropdown
			label='Time Period'
			data={data}
			//onChangeText={this.state.timePeriod=value}
			/>
		);
	}
}