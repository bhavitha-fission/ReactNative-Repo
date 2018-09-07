import React, { Component } from 'react';
import { StyleSheet,Image} from 'react-native';
import { createStackNavigator,createDrawerNavigator,TabNavigator } from 'react-navigation';
import LoginComponent from './LoginComponent';
import RegistrationComponent from './RegistrationComponent';
import HomeComponent from './HomeComponent';
import ProfileComponent from './ProfileComponent';
import ScreenDetailsComponent from './ScreenDetailsComponent';
import AboutUsComponent from './AboutUsComponent';
import HorizontalScrollView from './HorizontalScrollView';
import LogoutComponent from './LogoutComponent';
import WeightIn from './WeightIn';


// Tab navigator

const TabNavigation=TabNavigator({
  Home: {screen:HomeComponent,
  navigationOptions:{
    tabBarIcon :<Image source = {require('./home.png')}/>
  }},
  Profile:{screen:ProfileComponent,
  navigationOptions:{
    tabBarIcon : <Image source = {require('./profileIcon.png')}/>
  }},
  WeightIn:{screen:WeightIn,
  navigationOptions:{
    tabBarIcon:<Image source = {require('./settings.png')}/>
  }},
},
{

   tabBarOptions: {
    activeTintColor: '#9370DB',
    inactiveTintColor: 'gray',
    backgroundColor: '#9370DB',
    showLabel: false,
    style: {backgroundColor:'#9370DB'}
  },
  animatedEnable: false,
  swipeEnable: false,
});

// drawer navigator 

const AppDrawer = createDrawerNavigator({

  Home: {screen:TabNavigation},
  Profile:{screen:ProfileComponent},
  About: {screen:AboutUsComponent},
  Scroll:{screen:HorizontalScrollView},
  Logout: {screen: LogoutComponent}   
},{
  drawerPosition: 'left',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle', 
  contentOptions: {
      activeTintColor: '#9370DB',
  }
})

// Stack navigator
const AppNavigator = createStackNavigator({

  Login: {
    screen: LoginComponent,
    navigationOptions: {
      title: "Login",
      headerLeft: null,
      gesturesEnabled: false, 
    
    },
  },
  Register : {
    screen: RegistrationComponent,
    navigationOptions: {
      title: "Registration",
      gesturesEnabled: false, 
    },
  },
  Menu : {
   screen : AppDrawer,
   navigationOptions: {
     header:null,
   }
  },
  
  ScreenDetails :{
    screen : ScreenDetailsComponent,
    navigationOptions: {
      title: "ScreenDetails",
    },
  }
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
    this.logout = this.logout.bind(this);

}
logout = () => { 
   
  this.props.navigation.navigate('Login')
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