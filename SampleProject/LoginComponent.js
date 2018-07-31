import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Button,
  TextInput,
  ActivityIndicator,
  YellowBox,
} from 'react-native';
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
       
          <Image source={require('./user.png')} style={styles.canvas} resizeMode =  'stretch'/>
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
        
         <View style = {styles.signInButton}>
        <Button 
        title = 'Sign in'
        color="white"
         onPress= {   
          ( ) => this.login("test@gmail.com","test")}
         /> 
         </View>
  
        <Button 
        title = 'Dont have an account? Sign up'      
        color="black" 
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
      backgroundColor: 'white',
      paddingTop: 23
    },
    canvas: {
      position: 'absolute',
      top: 80,
      alignItems:'center',
      bottom: 0, 
      width:100,
      height:100,
      borderRadius:50,
     borderWidth:2,
     borderColor:'black'
    
    },
    input: {
      margin: 15,
      height: 40,
      width: 300,
      borderColor: 'gray',
      borderWidth: 1.5
   },
   signInButton: {
    backgroundColor:'#9370DB',width:120,borderRadius:60,height:40
    
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