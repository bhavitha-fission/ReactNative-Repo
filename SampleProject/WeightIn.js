import React, { Component } from 'react';
import {
    View,StyleSheet,TouchableOpacity,Text
  } from 'react-native';
import HeaderComponent from './HeaderComponent';

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
          <View>
             <HeaderComponent {...this.props} />
          <View style = {{marginTop:60}}>
          
           <Text style = {styles.text}>Some people can gain around 3-5 pounds during their period.{'\n'}</Text>
            <Text style = {styles.text}> Fortunately,Shapa adjusts for this weight gain to give a more
            accurate reflection of your health.Do you have a menstrual cycle and would you like to use this feature?
          </Text>
          <View style = {styles.buttonView}>
        < TouchableOpacity  onPress = {this.showPopUp}>
        <Text style = {{marginTop:8,textAlign: "center",color:'white', fontSize: 20,}}>'Yes, use this feature'</Text>
        </TouchableOpacity>
        </View>
      </View>
      </View>
        )
      }
}
var styles = StyleSheet.create({

    buttonView: {
     backgroundColor: '#9370DB', width: 375, borderRadius: 182.5, height: 40,marginTop:40
    },
    text:{
    fontSize: 20,
    fontFamily: "Helvetica Neue",
    fontWeight: "400",
    textAlign: "center",
    marginTop: 20,
    backgroundColor: "transparent"
    }
  });
  