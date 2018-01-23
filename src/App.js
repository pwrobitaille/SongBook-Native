import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'
import reducers from './reducers'
import LoginForm from './components/LoginForm'

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyADpQ9bwpUDjAu4eVO9S_jbSsTwaSq_Jf8",
      authDomain: "songbook-3b3ab.firebaseapp.com",
      databaseURL: "https://songbook-3b3ab.firebaseio.com",
      projectId: "songbook-3b3ab",
      storageBucket: "",
      messagingSenderId: "931384933452"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    )
  }
}

export default App
