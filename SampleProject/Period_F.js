import React, { Component } from 'react';
import {
  TouchableHighlight, View, Text, StyleSheet, Dimensions,
} from 'react-native';
import DatePicker from 'react-native-datepicker';


export default class Period_F extends Component {


  constructor(props) {
    super(props)
    this.state = {date:"2016-05-15"};
    this.dateChanged = this.dateChanged.bind(this)
    
  this.state = {
    isOpen: false,
    isDisabled: false,
    swipeToClose: true,
    sliderValue: 0.3
  };

  }

 dateChanged(date) {
     this.setState({date: date})
     this.props.nextScreen();      
}

render() {
    return (
  
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', position: "absolute" }}>
        <View style={{ height: "100%", width: '100%', backgroundColor: "white", justifyContent: "center",alignItems:'center', borderRadius: 50, width: Dimensions.get('window').width }}>
          <Text style={{ marginTop: 40,fontFamily: "Helvetica Neue",textAlign:'center',fontSize:15 }}>What was the start date of {'\n'} your most recent period ? </Text>
         
          <View style={{ marginTop: 50 }}>

            <View style = {{alignItems:'center',justifyContent:'center'}}>
            <DatePicker 
            style={{ marginVertical: 15, marginBottom: 30 }}
            mode={"date"}
            placeholder="Select Date"
            confirmBtnText={"Confirm"}
            cancelBtnText={"Cancel"}
            format={"YYYY-MM-DD"}
            minDate={this.state.calendarMinDate}
            onDateChange={(date) =>this.dateChanged(date)}
           // onDateChange={(date) => {this.setState({date: date})}}
        
          />
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