import React, { Component } from 'react';
import {
    Text,View, Image, TouchableOpacity,Dimensions
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
            <TouchableOpacity style={{ marginLeft: 10, marginTop: 20}}
                onPress={() => {
                    this.props.navigation.openDrawer();                 
                }}>
                <Image
                    style={{ width: 30, height: 30}}
                    source={require('./menuIcon.png')}
                />
            </TouchableOpacity>
        </View>);
    }
}