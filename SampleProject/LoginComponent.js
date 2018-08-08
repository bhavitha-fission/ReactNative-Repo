import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Button,
  TextInput,
  ActivityIndicator,
  YellowBox,
  AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';
import { saveUsers } from './actions';
import { Item } from 'native-base';

class LoginComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      isLoading: false,

    }
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
      'warning: isMounted is deprecated',
      'Warning: isMounted(...) is deprecated'
    ]);
  }


  ShowHideActivityIndicator = () => {

    if (this.state.isLoading == true) {
      this.setState({ isLoading: false })
    }
    else {
      this.setState({ isLoading: true })
    }
  }

  // login functionality
  async login(username, password) {

  //  this.props.navigation.navigate('Menu')
  
    // validation
      if(username == '' && password == '') {
       alert('please enter username and password')
        return
      }
    
      if(username == '' || password == '') {
        alert('please enter empty field')
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

      // stop activity indicator
      this.ShowHideActivityIndicator()

      // get users from Async storage
      let getUsers = await AsyncStorage.getItem('userObject');
      var tempArray = JSON.parse(getUsers);
     
      var index = tempArray.findIndex((data,index) => {
        return data.email === username
      })

      var name = tempArray.map((item, key)=>{
         return item.email === username && item.password === password
       })
      if(index == -1) {
        alert('user not found')
      } 
      else if(name) {
        //login success
        this.ShowHideActivityIndicator()
        this.props.navigation.navigate('Menu')
      }
      else {
        // login failure
        this.ShowHideActivityIndicator()
        alert('in correct username or password')
      }
  }
  // Registration 
  signUp() {

    this.props.navigation.navigate('Register')
  }
  render() {

    return (

      <View style={styles.container}>

        <Image source={require('./user.png')} style={styles.canvas} resizeMode='stretch' />
        <TextInput
          style={styles.input}
          placeholder="Enter user name"
          returnKeyType="next"
          underlineColorAndroid="transparent"
          onChangeText={(text) => this.setState({ email: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry
          returnKeyType="next"
          underlineColorAndroid="transparent"
          onChangeText={(text) => this.setState({ password: text })}
        />
        {
          this.state.isLoading ? <ActivityIndicator style={{ padding: 40 }} /> : null
        }

        <View style={styles.signInButton}>
          <Button
            title='Sign in'
            color="white"
            onPress={
              () => this.login('T@gmail.com', 't')}
          />
        </View>

        <Button
          title='Dont have an account? Sign up'
          color="black"
          onPress={
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
    backgroundColor: 'white',
    paddingTop: 23
  },
  canvas: {
    position: 'absolute',
    top: 60,
    alignItems: 'center',
    bottom: 0,
    width: 100,
    height: 100,
    borderColor: 'black'
 },
  input: {
    margin: 15,
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1.5
  },
  signInButton: {
    backgroundColor: '#9370DB', width: 120, borderRadius: 60, height: 40
 },
});


const mapStateToProps = (state, props) => {
  return {
    userObj: state.users
  }
}

const mapActionsToProps = {
  saveusers: saveUsers,
}

export default connect(mapStateToProps, mapActionsToProps)(LoginComponent);