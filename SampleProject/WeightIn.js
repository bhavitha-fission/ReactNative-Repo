import React, { Component } from 'react';


  import {
    View,StyleSheet,Button
  } from 'react-native';

export default class WeightIn extends Component {

    constructor(props) {
        super(props)
        this.showPopUp = this.showPopUp.bind(this);
       
    }
    showPopUp() {
 
 this.props.navigation.navigate('CycleType');
}
 
    render() {
 
        return (
          <View style={styles.container}>
        <Button title ='Yes, use this feature' onPress = {this.showPopUp}></Button>
      </View>
        )
      }
}
var styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgb(43, 186, 180)',
    },
    button: {
      borderRadius: 4,
      padding: 10,
      marginLeft: 10,
      marginRight: 10,
      backgroundColor: '#ccc',
      borderColor: '#333',
      borderWidth: 1,
    }
  });
  