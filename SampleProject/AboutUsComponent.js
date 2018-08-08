import React, { Component } from 'react';
import {
    Text, View, Image, TouchableHighlight
} from 'react-native';

import HeaderComponent from './HeaderComponent';
// Bluetooth library.
import { BleManager } from 'react-native-ble-plx';


const backgroundColor = '#0067a7';

export default class AboutUsComponent extends Component {

    constructor() {
        super();
        this.manager = new BleManager();
       
    }

    componentWillMount() {
        const subscription = this.manager.onStateChange((state) => {
            if (state === 'PoweredOn') {
                alert('power on')
                this.scanAndConnect();
                subscription.remove();
            }
        }, true);
    }

    scanAndConnect() {
        this.manager.startDeviceScan(null, null, (error, device) => {
            if (error) {
                // Handle error (scanning will be stopped automatically)
                return
            }
    
            // Check if it is a device you are looking for based on advertisement data
            // or other criteria.
            if (device.name === 'SensorTag') {
                
                // Stop scanning as it's not necessary if you are scanning for one device.
                this.manager.stopDeviceScan();
    
                // Proceed with connection.
         
            }
        });
    }

    static navigationOptions = ({ navigation }) => {
        let drawerLabel = 'About us';
        return { drawerLabel };
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