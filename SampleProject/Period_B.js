import React, { Component } from 'react';
import {
  TouchableHighlight, View, Text, StyleSheet, Dimensions,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import Modal from 'react-native-modalbox';
import Period_C from './Period_C';
import Period_D from './Period_D';

export default class Period_B extends Component {


  constructor(props) {
    super(props)
    this.state = {date:"2016-05-15"};
    
  this.goToOtherScreen = this.goToOtherScreen.bind(this);
  this.goToNextScreen = this.goToNextScreen.bind(this);
  this.state = {
    isOpen: false,
    isDisabled: false,
    swipeToClose: true,
    sliderValue: 0.3
  };

  }


  goToOtherScreen = (str) => {
    this.props.navigation.navigate(str);
    
  }
  goToNextScreen() {
  
    this.props.btnClickEvent();
   
  }

render() {
    return (
      <View>
        
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', position: "absolute" }}>
        <View style={{ height: "100%", width: '100%', backgroundColor: "white", justifyContent: "center", borderRadius: 50, width: Dimensions.get('window').width }}>
          <Text style={{ marginTop: 40, marginLeft: 30 }}>The first day of your period is the first day that you have full menstrual flow. Spotting doesn't count</Text>
          <Text style={{ marginTop: 40, marginLeft: 30 }}>Do you know when your last period started?</Text>
          <View style={{ marginTop: 70 }}>

            <TouchableHighlight  style={styles.button} onPress={this.goToNextScreen}>
              <Text>Yes, I remember the exact date</Text>
            </TouchableHighlight>
            <View style = {{alignItems:'center',justifyContent:'center'}}>
            <DatePicker 
            style={{ marginVertical: 15, marginBottom: 30 }}
            mode={"date"}
            placeholder="Select Date"
            confirmBtnText={"Confirm"}
            cancelBtnText={"Cancel"}
            format={"YYYY-MM-DD"}
            minDate={this.state.calendarMinDate}
            onDateChange={(date) => {this.setState({date: date})}}
          />
          </View>
            <TouchableHighlight style={styles.button} onPress={this.goToNextScreen}>
              <Text>No, I'm not 100% sure</Text>
            </TouchableHighlight> 

          </View>

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
  },
  modal: {
    height: Dimensions.get('window').height,
    borderRadius:Dimensions.get('window').width/2,
   
  },
});