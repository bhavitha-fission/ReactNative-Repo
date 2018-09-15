import React, { Component } from 'react';
import {
    TouchableHighlight,View,Text,StyleSheet
  } from 'react-native';

export default class Period_A extends Component {
    render()
    {
       return (
        
        <View style={{ flex: 1 ,flexDirection: 'column', justifyContent: 'flex-end',position:"absolute"}}>
        <View style={{ height: "100%" ,width: '100%', backgroundColor:"white", justifyContent:"center",borderRadius:50}}>
        <Text style = {{marginTop:10,marginLeft:30}}>In order for shaps's algorithm to work accurately, we'll need to know if your period is perfectly regular</Text>
        <Text style = {{marginTop:60,width:160,justifyContent:"center",textAlign:'center',alignItems:'center',marginLeft:100}}>Is your menstrual cycle EXACTLY the same lenght every month ?</Text>
        <View style = {{marginTop : 70}}>

<TouchableHighlight ref={ref => this.touchable = ref} style={styles.button} onPress={console.log('i')}>
  <Text>Yes, I'm on birth control pills and my cycle is always exactly 28days</Text>
</TouchableHighlight>
 <TouchableHighlight ref={ref => this.touchable = ref} style={styles.button} onPress={console.log('i')}>
  <Text>Yes, I'm not on birth control pills but my cycle is perfetly regular</Text>
</TouchableHighlight>
 
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
      marginTop:10,
      marginLeft: 10,
      marginRight: 10,      
      borderColor: '#333',
      borderWidth: 1,
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  });