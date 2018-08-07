import React, { Component } from 'react';
import {
   
    Text,
   
    View,

    AsyncStorage
  
  } from 'react-native';


export default class LogoutComponent extends Component {

    constructor(props) {
        super(props);
     }
    componentWillMount() {
       this.props.navigation.navigate('Login');     
    }
    render(){
        return(
            <View>
            <Text></Text>
            </View>
        )
    }
}
