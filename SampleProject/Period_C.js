import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Dimensions
} from 'react-native';


export default class Period_C extends Component {


  constructor(props) {
    super(props)
    this.state = {date:"2016-05-15"}
  }

  componentWillMount() {
    this.props.generateEvent(); 
  }

  render() {
    return (

       <View style={{ flex: 2, flexDirection: 'column', position: "absolute" }}>
        <View style={ styles.container}>
          
          <Text style ={styles.textStyle}>{'\n \n \n \n \n'}Congratulation!{'\n \n'} </Text>        
          <Text style ={styles.textStyle}> Shapa's algorithm is now attuned to your weight fluctuations during your menstrual cycle.{'\n \n'}</Text>
          <Text style ={styles.textStyle}>If at anytime you'd like to edit your information,head to the "Period Weight Adjuster" section on your Profile settings.{'\n \n \n \n \n \n \n'} </Text>
          <Text style ={styles.smallText}>Swipe down to close</Text>/>
        </View>
     </View>
    )
  }
}

var styles = StyleSheet.create({

  container : {
    height: "100%", width: '100%', flex:3, 
    backgroundColor: "white", borderRadius: 50, width: Dimensions.get('window').width, height: Dimensions.get('window').height
  },
  textStyle:{
    textAlign:'center',fontSize:18,fontFamily:'Helvetica Neue',fontWeight: "300"
  },
  smallText:{
    textAlign:'center',fontSize:15,fontFamily:'Helvetica Neue',fontWeight: "300"
  }
});