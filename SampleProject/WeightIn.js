import React, { Component } from 'react';
import Popover from 'react-native-popover-view'

  import {
    TouchableHighlight,View,Text,StyleSheet
  } from 'react-native';

export default class HambergerIcon extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isVisible: false
        }
    }

    showPopover() {
        this.setState({isVisible: true});
      }
     
      closePopover() {
        this.setState({isVisible: false});
      }

    render() {
 
        return (
            <View style={styles.container}>
        <TouchableHighlight ref={ref => this.touchable = ref} style={styles.button} onPress={() => this.showPopover()}>
          <Text>Press me</Text>
        </TouchableHighlight>

        <Popover
          isVisible={this.state.isVisible}
          fromView={this.touchable}
          onClose={() => this.closePopover()}>
          <Text>You are awesome. Keep smile!</Text>
        </Popover>
      </View>
        )
      }
}
var styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgb(43, 186, 180)',
    },
    button: {
      borderRadius: 4,
      padding: 10,
      marginLeft: 10,
      marginRight: 10,
      backgroundColor: '#ccc',
      borderColor: '#333',
      borderWidth: 1,
    }
  });
  