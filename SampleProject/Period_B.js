import React, { Component } from 'react';
import {
  TouchableHighlight, View, Text, StyleSheet, Dimensions
} from 'react-native';

export default class Period_B extends Component {
  render() {
    return (

      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', position: "absolute" }}>
        <View style={{ height: "100%", width: '100%', backgroundColor: "white", justifyContent: "center", borderRadius: 50, width: Dimensions.get('window').width }}>
          <Text style={{ marginTop: 40, marginLeft: 30 }}>The first day of your period is the first day that you have full menstrual flow. Spotting doesn't count</Text>
          <Text style={{ marginTop: 40, marginLeft: 30 }}>Do you know when your last period started?</Text>
          <View style={{ marginTop: 70 }}>

            <TouchableHighlight ref={ref => this.touchable = ref} style={styles.button} onPress={this.goToNextScreen}>
              <Text>Yes, I remember the exact date</Text>
            </TouchableHighlight>
            <TouchableHighlight ref={ref => this.touchable = ref} style={styles.button} onPress={console.log('i')}>
              <Text>No, I'm not 100% sure</Text>
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
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderColor: '#333',
    borderWidth: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
});