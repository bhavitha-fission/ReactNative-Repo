import React, { Component } from 'react';
import {
    View,StyleSheet,TouchableOpacity,Text,Dimensions
  } from 'react-native';
import HeaderComponent from './HeaderComponent';
import Modal from 'react-native-modalbox';
import Period_A from './Period_A';
import Period_B from './Period_B';
import Period_C from './Period_C';
import Period_D from './Period_D';

export default class WeightIn extends Component {

    constructor(props) {
        super(props)
        this.state = {
          isOpen: false,
          isDisabled: false,
          swipeToClose: true,
          sliderValue: 0.3
        };
       this.changeModal  = this.changeModal.bind(this);
       this.changeModal2  = this.changeModal2.bind(this);
       this.goToNextScreen  = this.goToNextScreen.bind(this);
     
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
    changeModal() {
    
      this.refs.modal1.close()
      this.refs.modal2.open()
    }

    changeModal2(){
      this.refs.modal2.close()
      this.refs.modal3.open()
    }

     goToNextScreen() {
      this.refs.modal1.open()
    }

   
    render() {
 
        return (
          <View style = {{backgroundColor:'white'}}>
             <HeaderComponent {...this.props} />
          <View style = {{backgroundColor:'white'}}>
          <Text style = {styles.text}>Some people can gain around 3-5 pounds during their period.{'\n'}</Text>
            <Text style = {styles.text}> Fortunately,Shapa adjusts for this weight gain to give a more
          accurate reflection of your health.Do you have a menstrual cycle and would you like to use this feature?
         </Text>
          <View style = {styles.buttonView}>
        < TouchableOpacity  onPress = {this.goToNextScreen}>
         <Text style = {{marginTop:8,textAlign: "center",color:'white', fontSize: 20,}}>'Yes, use this feature'</Text>
         </TouchableOpacity>
         </View> 
  
          <Modal style={[styles.modal]} position={"bottom"} ref={"modal1"}>
          <Period_A {...this.props} btnClickEvent = {this.changeModal} />
          </Modal>
          <Modal style={[styles.modal]} position={"bottom"} ref={"modal2"}>
          <Period_B {...this.props} btnClickEvent = {this.changeModal2} />
          </Modal>
          <Modal style={[styles.modal]} position={"bottom"} ref={"modal3"}>
          <Period_C {...this.props} btnClickEvent = {this.changeModal} />
          </Modal>
          <Modal style={[styles.modal]} position={"bottom"} ref={"modal4"}>
          <Period_D {...this.props} btnClickEvent = {this.changeModal} />
          </Modal>
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
    },
    
    modal: {
      height: Dimensions.get('window').height,
      borderRadius:Dimensions.get('window').width/2,

    },
  });
  