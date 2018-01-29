import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import LoginForm from './components/LoginForm'
import Router from './Router'

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App
