import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    View,
    Button,
    Alert,
    TextInput,
    ActivityIndicator,
    YellowBox,
    AsyncStorage
  
  } from 'react-native';


export default class LogoutComponent extends Component {

    constructor(props) {
        super(props);
     }

     async removeItemValue(key) {
        try {
          await AsyncStorage.removeItem("userObject");

          this.props.navigation.navigate('Login');
          return true;
        }
        catch(exception) {
          return false;
        }
      }
    componentWillMount() {
        this.removeItemValue();
        AsyncStorage.removeItem('userObject');
    }
    render(){
        return(
            <View>
            <Text>logout </Text>
            </View>
        )
    }
}
