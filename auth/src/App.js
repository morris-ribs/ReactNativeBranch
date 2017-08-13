import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null };
  
  /**
   * Lifecycle event: right before rendering
   */
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyCtp_NH0zkF5s4YjQNHScm4LHXBsOg38bU",
      authDomain: "auth-afeb2.firebaseapp.com",
      databaseURL: "https://auth-afeb2.firebaseio.com",
      projectId: "auth-afeb2",
      storageBucket: "auth-afeb2.appspot.com",
      messagingSenderId: "720411779222"
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
      this.setState({loggedIn: !!user});
    });
  }

  renderContent() {
    switch(this.state.loggedIn) {
      case true:
         return (
         <View style={{ borderBottomWidth: 1,
            padding: 5,
            backgroundColor: '#fff',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            borderColor: '#ddd',
            position: 'relative' }}>
          <Button onPress={() => firebase.auth().signOut()}>
              Log Out
          </Button>
         </View>
         );
      case false: 
        return <LoginForm />;
      default:
        return <Spinner size="large" />
    }
  }
  
  render() {
    return (
      <View>
          <Header headerText="Authentication" /> 
          {this.renderContent()}
      </View>
    );
  }
}

export default App;