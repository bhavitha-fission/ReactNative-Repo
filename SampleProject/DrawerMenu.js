import React, { Component } from 'react';
import HomeComponent from './HomeComponent';
import AboutUsComponent from './AboutUsComponent';
import HorizontalScrollView from './HorizontalScrollView';
import { createDrawerNavigator } from 'react-navigation';
import {Home} from './screenNames';
import ScreenDetailsComponent from './ScreenDetailsComponent'

 export default class DrawerMenu extends Component {
     constructor(props) {
      super(props)
     } 

    logout = () => { 
       
        this.props.navigation.navigate('Login');
    }
    render() {
   const Drawer = createDrawerNavigator({

    Home: {screen:HomeComponent},
    About: {screen:AboutUsComponent},
    Scroll:{screen:HorizontalScrollView},
    Logout: {
        screen: () => {
            this.logout()
            return(this.logout)
        },
    },  
    ScreenDetails :{

        screen : ScreenDetailsComponent,
        navigationOptions: {
          title: "ScreenDetails",
          gesturesEnabled: false, 
          headerLeft: null,
          headerStyle: {
            backgroundColor: '#9370DB',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        },
      }
 },{
    initialRouteName: Home,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',  
    contentOptions: {
        activeTintColor: 'red',
    }
})
        return(
         <Drawer/>
        )
    }
 }



