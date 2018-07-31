import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  Alert,
  TextInput,
  ActivityIndicator,
  YellowBox,
  AsyncStorage,
  TouchableHighlight

} from 'react-native';

import {
  createStackNavigator,
} from 'react-navigation';

import HomeComponent from './HomeComponent';
import HorizontalScrollView from './HorizontalScrollView'
import RegistrationComponent from './RegistrationComponent'
import DrawerMenu from './DrawerMenu';
import { connect } from 'react-redux';
import {saveUsers} from './actions';


class LoginComponent extends Component {

  constructor(props){
      super(props)
  
      this.state = {
        email: '',
        password: '',
        isLoading:false,
     
      }
      YellowBox.ignoreWarnings([
        'Warning: componentWillMount is deprecated',
        'Warning: componentWillReceiveProps is deprecated',
        'warning: isMounted is deprecated',
        'Warning: isMounted(...) is deprecated'
      ]);
    }
    
  
  ShowHideActivityIndicator = () =>{
   
    if(this.state.isLoading == true)
    {
      this.setState({isLoading: false})
    }
    else
    {
      this.setState({isLoading: true})
    }
  }
 
  // login functionality
async login(username, password) {
  this.props.navigation.navigate('Menu')
  // validation
  /*  if(username == '' && password == '') {
      Alert.alert('please enter username and password')
      return
    }
  
    if(username == '' || password == '') {
      Alert.alert('please enter empty field')
      return
    }
// fetch data from store
  /*  {
      this.props.userObj.map((user)=>{
        if(user.username === username && user.password === password){
          //login success
          this.ShowHideActivityIndicator()
          this.props.navigation.navigate('Menu')
        }
        else {
         // login failure
         this.ShowHideActivityIndicator()
         alert('Incorrect username or password.')
        }
      })
    
    }*/

  /*function getAsyncUserData() {
      let getUsers
      return new Promise((resolve,reject)=>{
        AsyncStorage.getItem('userObject')
        .then(function(data){
          resolve(data)
        }).catch((err)=> {
            reject(err);
        })    
      })
    }
    // stop activity indicator
    this.ShowHideActivityIndicator()
    // get users from Async storage
    getUsers  = await getAsyncUserData();
    getUsers = JSON.parse(getUsers);
    console.log('get users'+getUsers)
    var index = getUsers.findIndex((data,index) => {
      return data.email === username
    })
    
    if(index > -1) {
      //login success
      this.ShowHideActivityIndicator()
      this.props.navigation.navigate('Menu')
    }
    else {
      // login failure
      this.ShowHideActivityIndicator()
      alert('user not found')
    }*/
    

}
  // Registration 
  signUp() {
  
    this.props.navigation.navigate('Register')
   } 
    render() {
    
      return (
       
        <View style={styles.container}>  
       
          <Image source={require('./splash_logo.png')} style={styles.canvas} />
          <TextInput 
          style={styles.input}
          placeholder = "Enter user name"
          returnKeyType="next"
          onChangeText={(text) => this.setState({email:text})}    
          />
          <TextInput 
          style={styles.input}
          placeholder = "Enter password"
          secureTextEntry
          returnKeyType="next"
          onChangeText={(text) => this.setState({password:text})} 
          />
          {
          this.state.isLoading ?  <ActivityIndicator style={{padding: 40}} /> : null
          }
        <Button
        title = 'Sign in'
        color="#841584"
         onPress= {   
          ( ) => this.login("test@gmail.com","test")}
         /> 
        <Button styles ={styles.signUpButton}
        title = 'Sign up'
        onPress = {
          () => this.signUp()
        }
         />  

        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      paddingTop: 23
    },
    canvas: {
      position: 'absolute',
      top: 20,
      alignItems:'center',
      bottom: 0, 
      width:160,
      height:160,
    },
    input: {
      margin: 15,
      height: 40,
      width: 300,
      borderColor: 'gray',
      borderWidth: 1
   },
   signUpButton: {
    position: 'absolute',
    bottom:0,
    left:0,
    width : 60
    },
  });


  const mapStateToProps = (state,props) => {
    return {
        userObj:state.users       
    }
}

const mapActionsToProps = {
  saveusers:saveUsers,
}

export default connect(mapStateToProps,mapActionsToProps)(LoginComponent);