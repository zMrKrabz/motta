import {
	createAppContainer,
	createBottomTabNavigator,
	createStackNavigator
} from 'react-navigation';
import React, { Component } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import Camera from '../components/Camera';
import SettingScreen from '../screens/SettingsScreen';
import HomeScreen from '../screens/HomeScreen';

const BottomTabNavigator = createBottomTabNavigator({
	Home: {
		screen: HomeScreen,
	},
	Camera: {
		screen: Camera,
	},
	Settings: {
		screen: SettingScreen,
	},
}, {
	tabBarOptions: {
		labelStyle: {
			fontSize: 14
		}
	}
});

const uploadNavigator = createStackNavigator(
	{
		Camera: {
			screen: Camera
		}
	}
)

const uploadContainer = createAppContainer(uploadNavigator);

const AppContainer = createAppContainer(BottomTabNavigator);
export default AppContainer;