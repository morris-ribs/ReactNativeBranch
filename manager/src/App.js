import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDUECTjMT-a4ofjlkqrfYOfz9PPddB79O0",
      authDomain: "manager-ffd81.firebaseapp.com",
      databaseURL: "https://manager-ffd81.firebaseio.com",
      projectId: "manager-ffd81",
      storageBucket: "",
      messagingSenderId: "226901169887"
    };
    firebase.initializeApp(config);
  }
  
  render() {
    // first argument: reducers
    // second argument: initial state (mostly for SSR)
    // third argument: store enhancer (adds additional functionality to the state)
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;