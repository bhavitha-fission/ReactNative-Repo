import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Dimensions
} from 'react-native';
import { Button } from 'native-base';


export default class Period_C extends Component {


  constructor(props) {
    super(props)
    this.state = {date:"2016-05-15"}
  }
  render() {
    return (

      <View style={{ flex: 2, flexDirection: 'column', position: "absolute" }}>
        <View style={{ height: "100%", width: '100%', flex:3, alignItems: "center",
    justifyContent: "center",backgroundColor: "white", borderRadius: 50, width: Dimensions.get('window').width, height: Dimensions.get('window').height }}>
          
          <Text>{'\n \n \n \n \n'}Congratulation!{'\n \n'} </Text>        
          <Text>Shapa's algorithm is now attuned to your weight fluctuations during your menstrual cycle.{'\n \n'}</Text>
          <Text>If at anytime you'd like to edit your information,head to the "Period Weight Adjuster" section on your Profile settings.{'\n \n'} </Text>
          <View style = {{flex:1,alignItems: "center",justifyContent: "center"}}>
          <Button title = 'Swipe down to close' onPress={() => this.refs.modal.close()} />
          </View>
         
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({

  button: {
    borderRadius: 50,
    padding: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderColor: '#333',
    borderWidth: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
});