import React, { Component } from 'react';
import {
	StyleSheet,
	TouchableHighlight,
	View,
	Text,
	Image,
	TouchableOpacity,
  StatusBar,
} from 'react-native';
import SettingsList from 'react-native-settings-list';
import Theme, { createTheme, createStyle, createThemedComponent } from 'react-native-theming';

 
const styles = createStyle({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '@backgroundColor',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '@textColor',
  },
  instructions: {
    textAlign: 'center',
    color: '#888',
    marginBottom: 5,
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: '@buttonColor',
    borderRadius: 3,
    flex: 1,
    alignItems: 'center',
	},

});

const themes = [
  createTheme({
    backgroundColor: 'white',
    textColor: 'black',
    buttonColor: 'blue',
    buttonText: 'white',
    statusBar: 'dark-content',
	}, 'Light'),
	

  createTheme({
    backgroundColor: 'black',
    textColor: 'white',
    buttonColor: 'yellow',
    buttonText: 'black',
    statusBar: 'light-content',
  }, 'Dark'),
];


const Button = createThemedComponent(TouchableOpacity);
const Bar = createThemedComponent(StatusBar, ['barStyle', 'backgroundColor']);

export default class Settings extends Component{
	constructor(){
	super();
	this.onValueChange = this.onValueChange.bind(this);
	this.state = {switchValue: false};
	}
	render() {
		return (
		  <Theme.View style={styles.container}>
			<View style={{flex:1, marginTop:50, width:'100%'}}>
			  <SettingsList>
				  <SettingsList.Header headerText='Aesthetics' />

				<SettingsList.Header headerText='Motta' headerStyle={{ marginTop:50}}/>

				<SettingsList.Item title='Contact Us'

			/>
				<SettingsList.Item title='About Us'/>
			  </SettingsList>
				<View style={{ flexDirection: 'row' }}>
          { themes.map(theme => (
            <Button key={theme.name} style={styles.button} onPress={() => theme.apply()}>
              <Theme.Text style={{ color: '@buttonText' }}>{theme.name}</Theme.Text>
            </Button>
            ))
          }
        </View>
				</View>
		  </Theme.View>
		);
	  }
	  
	  onValueChange(value){
		this.setState({switchValue: value});
	  }
	
};

