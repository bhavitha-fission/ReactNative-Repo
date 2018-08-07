import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, AsyncStorage } from 'react-native';
import t from 'tcomb-form-native';

import { connect } from 'react-redux';
import { saveUsers } from './actions';

const Form = t.form.Form;
const Email = t.subtype(t.Str, (email) => {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email)

});
const User = t.struct({
  email: Email,
  username: t.String,
  password: t.String,
});

var options = {
  fields: {
    password: {
      password: true,
      secureTextEntry: true
    }
  }
};

class RegistrationComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      registeredUsers: []
    }
  }

  handleSubmit = () => {

    const value = this._form.getValue();
    if (value) {
      if (value.email && value.username && value.password) {
        let tempArray = this.state.registeredUsers;
        tempArray.push(value);
        AsyncStorage.setItem('userObject', JSON.stringify(tempArray))
        this.setState({ registeredUsers: tempArray });
        console.log('tempArray' + tempArray);
        console.log('value' + this.state.registeredUsers);
        console.log('username: ', value.username);
        console.log('email: ', value.email);
        console.log('registeredUsers array is', this.state.registeredUsers)
        this.props.saveusers({ username: value.username,email:value.email,password: value.password });
        alert('user registered successfully')
        this.props.navigation.navigate('Login')
      }
    }
    else {
      alert('enter all values')
    }
  }
  render() {
    return (

      <View style={styles.container}>
        <Form ref={c => this._form = c} type={User} options={options} />
        <Button title='Sign up'
          onPress={this.handleSubmit}
        />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
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

export default connect(mapStateToProps, mapActionsToProps)(RegistrationComponent);