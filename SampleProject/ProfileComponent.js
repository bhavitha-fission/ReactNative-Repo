import React, { Component } from 'react';
import {
    Button,Text,View,StyleSheet,Dimensions,Image
} from 'react-native'
import HeaderComponent from './HeaderComponent'


export default class ProfileComponent extends Component {
constructor(props){
    super(props)
    this.openCamera = this.openCamera.bind(this);
}

    openCamera() {

       
    }
    render() {

    return(
        <View>
             <HeaderComponent {...this.props} />
             <View style = {styles.topView}>
             <Image style = {styles.image} source={require('./user.png')}/>
             <Button onPress = {this.openCamera} title = 'click'>
             </Button>
        </View>
        </View>
    )
}
}


const styles =  StyleSheet.create({

    topView :{
     width : Dimensions.get('window').width,
     height: Dimensions.get('window').height/2,
     backgroundColor: 'white',
     justifyContent: 'center',
     alignItems: 'center',
  
    },
    image: {
        height:90,
        width:90,

    }
})