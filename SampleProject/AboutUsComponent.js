import React, { Component } from 'react';
import {
    Text, View, Image, TouchableHighlight
} from 'react-native';
 
import HeaderComponent from './HeaderComponent';

const backgroundColor = '#0067a7';

export default class AboutUsComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        let drawerLabel = 'About us';
        return {drawerLabel};
    }
    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'column',
        }}>      
         <HeaderComponent {...this.props} /> 
            <View style={{
                flex: 1,
                backgroundColor: backgroundColor,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                    This is About us Screen
                </Text>
            </View>
        </View>);
    }

}