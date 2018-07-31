import { AppRegistry } from 'react-native';
import App from './App'
import { Provider } from 'react-redux';
import React from 'react';
import { SAVE_USERS } from './actions' ;
import { persistStore } from 'redux-persist';


import { createStore } from 'redux';

const initialState = {
    numberOfLogins: 0,
    users: []
  };
  
function reducer(state = initialState, { type, payload }) { 

       if(type === SAVE_USERS) {
        
        var newArray = [...state.users];
        newArray.push({username:payload.users.username,password:payload.users.password})
         return state = {
            ...state,
            users:newArray
         }
      }
      else { 
          return state;
      }   
  }
  
const store = createStore(reducer);
let persistor = persistStore(store)

const AppContainer = () => (
    <Provider store={store}>
      <App/>
    </Provider>
  );

AppRegistry.registerComponent('SampleProject', () => AppContainer);

