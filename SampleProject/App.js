import React, { Component } from 'react';
import { StyleSheet,Image} from 'react-native';
import { createStackNavigator,createDrawerNavigator,TabNavigator,StackNavigator } from 'react-navigation';
import LoginComponent from './LoginComponent';
import RegistrationComponent from './RegistrationComponent';
import HomeComponent from './HomeComponent';
import ProfileComponent from './ProfileComponent';
import ScreenDetailsComponent from './ScreenDetailsComponent';
import AboutUsComponent from './AboutUsComponent';
import HorizontalScrollView from './HorizontalScrollView';
import LogoutComponent from './LogoutComponent';
import WeightIn from './WeightIn';
import PWACycleType from './PWACycleType';
import Period_A from './Period_A';
import Period_B from './Period_B';
import Period_C from './Period_C';


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


// const ModalStack = StackNavigator(
//   {
   
//     MyModal: {
//       screen: PWACycleType,
//     },
//   },

// );

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
  CycleType :{
    screen:PWACycleType,
    header:null
  },
  Period_A_Modal:{
    screen:Period_A,
  },
  Period_B_Modal:{
    screen:Period_B
  },
  Period_C_Modal:{
    screen:Period_C
  },
  ScreenDetails :{
    screen : ScreenDetailsComponent,
    navigationOptions: {
      title: "ScreenDetails",
    },
  }
 },
 {
  mode: 'modal',
  
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