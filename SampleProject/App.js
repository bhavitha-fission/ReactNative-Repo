import React, { Component } from 'react';
import { StyleSheet,TouchableOpacity,Image} from 'react-native';
import { createStackNavigator,createDrawerNavigator } from 'react-navigation';
import LoginComponent from './LoginComponent';
import RegistrationComponent from './RegistrationComponent';
import HomeComponent from './HomeComponent';
import ProfileComponent from './ProfileComponent';
import ScreenDetailsComponent from './ScreenDetailsComponent';
import AboutUsComponent from './AboutUsComponent';
import HorizontalScrollView from './HorizontalScrollView';
import LogoutComponent from './LogoutComponent';



// drawer navigator 

const AppDrawer = createDrawerNavigator({

  Home: {screen:HomeComponent},
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