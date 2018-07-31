import React, { Component } from 'react';
import {
    Text,View, Image, TouchableHighlight,Dimensions
} from 'react-native';

export default class HeaderComponent extends Component {

    render() {
        return (<View style={{
          
            height: 70,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center', 
            backgroundColor :'#9370DB',
                
        }}>
            <TouchableHighlight style={{ marginLeft: 10, marginTop: 20}}
                onPress={() => {
                    this.props.navigation.openDrawer();
                   
                }}>
                <Image
                    style={{ width: 25, height: 25 }}
                    source={{uri : 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png'}}
                />
            </TouchableHighlight>
        </View>);
    }
}