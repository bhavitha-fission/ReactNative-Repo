import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { createStackNavigator,createDrawerNavigator } from 'react-navigation';
import LoginComponent from './LoginComponent';
import RegistrationComponent from './RegistrationComponent';
import HomeComponent from './HomeComponent';
import DrawerMenu from './DrawerMenu';
import ScreenDetailsComponent from './ScreenDetailsComponent';
import AboutUsComponent from './AboutUsComponent';
import HorizontalScrollView from './HorizontalScrollView';


// drawer navigator 
const AppDrawer = createDrawerNavigator({

  Home: {screen:HomeComponent},
  About: {screen:AboutUsComponent},
  Scroll:{screen:HorizontalScrollView},
  Logout: {
      screen: () => {
          this.logout()
          return(this.logout)
      },
  }   
},{
  drawerPosition: 'left',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',  
  contentOptions: {
      activeTintColor: 'red',
  }
})


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
   screen : AppDrawer,
   navigationOptions: {
     header:null
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