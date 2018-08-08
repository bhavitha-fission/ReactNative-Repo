import React, { Component } from 'react';
import {
    Text, View,Button,Platform
} from 'react-native';

import HeaderComponent from './HeaderComponent';
// Bluetooth library.
import { BleManager } from 'react-native-ble-plx';
// Bluetooth status library
import { BluetoothStatus } from 'react-native-bluetooth-status';



const backgroundColor = '#0067a7';

export default class AboutUsComponent extends Component {

    static navigationOptions = ({ navigation }) => {
        let drawerLabel = 'About us';
        return { drawerLabel };
    }
    
    constructor() {
        super();
        this.manager = new BleManager();
        this.state = {
            loading: false,
            // [iOS users] This value will update every 2 seconds so we maintain an up to date reference on their current Bluetooth state.
            bluetoothEnabled: null
          };
       
    }

    componentDidUpdate(prevProps, prevState) {
        // [on iOS] As soon as the Bluetooth is enabled, advance to the next screen.
        if (Platform.OS === "ios" && this.state.bluetoothEnabled && !prevState.bluetoothEnabled){
          this.goToNextScreen();
        }
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
                device.connect()
    .then((device) => {
        return device.discoverAllServicesAndCharacteristics()
    })
    .then((device) => {
       // Do work on device with services and characteristics
    })
    .catch((error) => {
        // Handle errors
    });
         
            }
        });
    }

    goToNextScreen() {
        alert('u can navigate to next screen')
    }
 
    async checkBluetoothState(){

        if (Platform.OS === "ios") {
            this.bluetoothInterval = setInterval(async () => {
              const bluetoothEnabled = await BluetoothStatus.state();
              this.setState({
                  bluetoothEnabled
              });
            }, 2000);
          }
    }
     async bluetoothButtonTapped() {

       
        if (Platform.OS === "ios") {
            BluetoothStatus.openBluetoothSettings();
          } else {
            // Enable loading.
          
            const permissionWasGranted = await PermissionsUtil.requestAndroidLocationPermission();
            if (permissionWasGranted){
             
              // Turn on Bluetooth
              BluetoothStatus.enable();
              // Go to the next screen
              this.goToNextScreen();
            } else{
                alert('permission not granted');
            }
          }
         
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
                <Button title = "Turn Bluetooth" onPress = {this.bluetoothButtonTapped}/>
            </View>
        </View>);
    }

}