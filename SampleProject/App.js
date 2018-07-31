import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import LoginComponent from './LoginComponent';
import RegistrationComponent from './RegistrationComponent';
import HomeComponent from './HomeComponent';
import DrawerMenu from './DrawerMenu';
import ScreenDetailsComponent from './ScreenDetailsComponent';

// Stack navigator
const AppNavigator = createStackNavigator({

  Login: {
    screen: LoginComponent,
    navigationOptions: {
      title: "login",
      headerLeft: null,
      gesturesEnabled: false, 
    
    },
  },
  Register : {
    screen: RegistrationComponent,
    navigationOptions: {
      title: "Registration",
      headerLeft: null,
      gesturesEnabled: false, 
    },
  },
  Menu : {
    screen : DrawerMenu,
    navigationOptions: {
      title: "Home",
      header:null
    }
  },
  Home : {
    screen : HomeComponent,
    navigationOptions: {
      title: "Home",
      gesturesEnabled: false, 
      header:null
    },
  },
 },
{
  navigationOptions: {
  headerStyle: {
    backgroundColor: '#9370DB',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
},
},
);

export default class App extends React.Component {
  constructor(props) {
    super(props)
}
  render() {   
    return (
      <AppNavigator/>
    );
  }
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});