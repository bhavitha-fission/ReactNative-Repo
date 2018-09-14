import React, { Component } from 'react';


  import {
    TouchableHighlight,View,Text,StyleSheet
  } from 'react-native';

export default class HambergerIcon extends Component {

    constructor(props) {
        super(props)
       
    }

 
    render() {
 
        return (
          <View style={styles.container}>
  
         <TouchableHighlight ref={ref => this.touchable = ref} style={styles.button} onPress={this.props.navigation.navigate('MyModal')}>
          <Text>Yes,use this feature</Text>
        </TouchableHighlight>


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
  