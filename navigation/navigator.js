import {
	createAppContainer,
	createBottomTabNavigator,
	createStackNavigator
} from 'react-navigation';
import React, { Component } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import CameraScreen from '../components/Camera';
import SettingScreen from '../screens/SettingsScreen';
import HomeScreen from '../screens/HomeScreen';
import LoadingScreen from '../screens/LoadingScreen';
import DetailsScreen from '../screens/DetailsScreen';

const BottomTabNavigator = createBottomTabNavigator({
	Home: {
		screen: HomeScreen,
	},
	Camera: {
		screen: CameraScreen,
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
			screen: CameraScreen
		},
		LoadingScreen: {
			screen: LoadingScreen
		},
		DetailsScreen:{
			screen: DetailsScreen
		}
	}
)

const uploadContainer = createAppContainer(uploadNavigator);

const AppContainer = createAppContainer(BottomTabNavigator);
export default AppContainer;