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
import LoadingScreen from '../screens/LoadingScreen';

const BottomTabNavigator = createBottomTabNavigator({
	Home: {
		screen: HomeScreen,
	},
	Camera: {
		screen: uploadNavigator,
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
		},
		LoadingScreen: {
			screen: LoadingScreen
		}
	}
)

const uploadContainer = createAppContainer(uploadNavigator);

const AppContainer = createAppContainer(BottomTabNavigator);
export default AppContainer;