import { AppRegistry,AsyncStorage } from 'react-native';
import App from './App'
import { Provider } from 'react-redux';
import React from 'react';
import { SAVE_USERS } from './actions' ;
import { persistStore } from 'redux-persist';
import { createStore } from 'redux';

const initialState = {
    users: []
  };
  
function reducer(state = initialState, { type, payload }) { 

       if(type === SAVE_USERS) {
        
        var newArray = [...state.users];
        newArray.push({username:payload.users.username,email:payload.users.email,password:payload.users.password})
         return state = {
            ...state,
            users:newArray
         }
      }
      else { 
          return state;
      }   
  }

  function saveToLocalStorage(state) {
    try {
      const serializedState = JSON.stringify(state);
      AsyncStorage.setItem('state',serializedState);
    } catch(e) {
      console.log(e);
    }
  }
  function loadFromLocalStorage() {
      try {
         const serializedState = AsyncStorage.getItem('state');
         if (serializedState === null) return undefined ;
         return JSON.parse(serializedState);
      } catch(e) {
        console.log(e);
        return undefined ;
      }
  }
  
  
const persistedState = loadFromLocalStorage() ;  
const store = createStore(reducer,persistedState);
store.subscribe(()=> saveToLocalStorage(store.getState()));
// let persistor = persistStore(store)

const AppContainer = () => (
    <Provider store={store}>
      <App/>
    </Provider>
  );

AppRegistry.registerComponent('SampleProject', () => AppContainer);

