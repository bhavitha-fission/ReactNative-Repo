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
import Period_F from './Period_F';


export default class WeightIn extends Component {

    constructor(props) {
        super(props)
        this.state = {
          isOpen: false,
          isDisabled: false,
          swipeToClose: true,
          sliderValue: 0.3,
          bool:false,
          btnTitle :'Yes, use this feature',
          contentChange:{
            'line1':'Some people can gain around 3-5 pounds during their period.',
            'line2':'Fortunately,Shapa adjusts for this weight gain to give a more accurate reflection of your health.Do you have a menstrual cycle and would you like to use this feature?'
            
          }
        };
       this.changeModal  = this.changeModal.bind(this);
      this.changeModal2  = this.changeModal2.bind(this);
       this.goToNextScreen  = this.goToNextScreen.bind(this);
      this.changeContent = this.changeContent.bind(this); 
      this.lastScreen = this.lastScreen.bind(this); 
     
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

    changeModal2(arg){

      if(arg === 'yes') {
      this.refs.modal2.close()
      this.refs.modal3.open()
      }
      else {
        this.refs.modal2.close()
        this.refs.modal4.open()
      }
    }

    lastScreen() {
      this.refs.modal5.close()
      this.refs.modal3.open()
    }

    goToNextScreen() {
    
      if(this.state.bool){
        this.refs.modal5.open()
      }
      else {
        this.refs.modal1.open()
      }
    }

    async changeContent() {
     await this.setState({btnTitle: 'Mark my period'});
     this.setState({bool:true})
     let getContentData = this.state.contentChange;
     getContentData.line1 = 'You expressed your interest in having Shapa adjust your weight fluctuations during that time of the month.';
     getContentData.line2 = 'Did you have or are you currently on you period?'
     await this.setState({contentChange: Object.assign({},getContentData)});
    }
   
    render() {
 
        return (
          <View style = {{backgroundColor:'white'}}>
             <HeaderComponent {...this.props} />
          <View style = {{backgroundColor:'white'}}>
         <Text style = {styles.text}>{this.state.contentChange.line1}{'\n'}</Text>
          <Text style = {styles.text}>{this.state.contentChange.line2}</Text>
          <View style = {styles.buttonView}>
        < TouchableOpacity  onPress = {this.goToNextScreen}>
         <Text style = {{marginTop:8,textAlign: "center",color:'white', fontSize: 20,}}>{this.state.btnTitle}</Text>
         </TouchableOpacity>
         </View> 
  
          <Modal style={[styles.modal]} position={"bottom"} ref={"modal1"}>
          <Period_A {...this.props} btnClickEvent = {this.changeModal} />
          </Modal>
          <Modal style={[styles.modal]} position={"bottom"} ref={"modal2"}>
          <Period_B {...this.props} btnClickEvent = {(e) => this.changeModal2(e)} />
          </Modal>
          <Modal style={[styles.modal]} position={"bottom"} ref={"modal3"}>
          <Period_C {...this.props} generateEvent = {this.changeContent}/>
          </Modal>
          <Modal style={[styles.modal]} position={"bottom"} ref={"modal4"}>
          <Period_D {...this.props} generateEvent = {this.changeContent}/>
          </Modal>
          <Modal style={[styles.modal]} position={"bottom"} ref={"modal5"}>
          <Period_F {...this.props}  nextScreen = {this.lastScreen}/>
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
  