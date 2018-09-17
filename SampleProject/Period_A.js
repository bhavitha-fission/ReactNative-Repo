import React, { Component } from 'react';
import {
    TouchableHighlight,View,Text,StyleSheet,Dimensions
  } from 'react-native';
import Modal from 'react-native-modalbox';
import Period_B from './Period_B';

export default class Period_A extends Component {

  constructor(props) {
    super(props)
    this.goToNextScreen = this.goToNextScreen.bind(this)
    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3
    };
  }

  goToNextScreen() {
    //this.props.navigation.navigate('Period_B_Modal');
    this.props.btnClickEvent();
   
  }

  onClose() {
    console.log('Modal just closed');
  }

  onOpen() {
    console.log('Modal just openned');
  }

  onClosingState(state) {
    console.log('the open/close of the swipeToClose just changed');
  }

    render()
    {
       return (
        
        <View style={{ flex: 1 ,flexDirection: 'column', justifyContent: 'flex-end',position:"absolute"}}>
        <View style={{ height: "100%" ,width: '100%', backgroundColor:"white", justifyContent:"center",borderRadius:50}}>
        <Text style = {{marginTop:10,marginLeft:30}}>In order for shaps's algorithm to work accurately, we'll need to know if your period is perfectly regular</Text>
        <Text style = {{marginTop:60,width:160,justifyContent:"center",textAlign:'center',alignItems:'center',marginLeft:100}}>Is your menstrual cycle EXACTLY the same lenght every month ?</Text>
        <View style = {{marginTop : 70}}>
      
<TouchableHighlight  style={styles.button} onPress={this.goToNextScreen}>
  <Text>Yes, I'm on birth control pills and my cycle is always exactly 28days</Text>
</TouchableHighlight>
 <TouchableHighlight style={styles.button} onPress={this.goToNextScreen}>
  <Text>Yes, I'm not on birth control pills but my cycle is perfetly regular</Text>
</TouchableHighlight>
<TouchableHighlight  style={styles.button}  onPress={this.goToNextScreen}>
  <Text>No,my cycle is not perfectly regular</Text>
</TouchableHighlight>
<TouchableHighlight  style={styles.button} onPress={this.goToNextScreen}>
  <Text>I'm not sure about it</Text>
</TouchableHighlight> 

 </View>
 {/* <Modal style={[styles.modal]} position={"bottom"} ref={"modal"}>
          <Period_B {...this.props} />
          </Modal> */}
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
    },
    modal: {
      height: Dimensions.get('window').height,
      borderRadius:Dimensions.get('window').width/2
    },
  });