import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';

import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };
    
    /**
     * Button press handler
     */
    onButtonPress() {
      const { email, password } = this.state;

      this.setState({ error: '', loading: true });

      // call firebase to authenticate user
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this)) // login successful
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this)) // login successful
        .catch(this.onLoginFail.bind(this));
      });
    }

    /**
     * Login error handling
     */
    onLoginFail() {
      this.setState({ error: 'Authentication failed', loading: false });
    }

    /**
     * Login succes handling
     */
    onLoginSuccess() {
      this.setState({ email: '', password: '', error: '', loading: false });
    }

    renderButton() {
      return this.state.loading ? 
        <Spinner size="small" />
      :
        <Button onPress={this.onButtonPress.bind(this)}>
            Log In
        </Button>
    }

    render() {
      return (
          <Card>
              <CardSection> 
                <Input 
                  label="Email"
                  value={this.state.email}
                  onChangeText={email => this.setState({ email })}
                  placeholder="user@gmail.com" 
                />
              </CardSection>
              <CardSection>
                <Input 
                  secureTextEntry
                  placeholder="password"
                  label="Password"
                  value={this.state.password}
                  onChangeText={password => this.setState({ password })}
                />
              </CardSection>              
              <Text style={styles.errorTextStyle}>
                {this.state.error}
              </Text>
              <CardSection> 
                  { this.renderButton() }
              </CardSection>
          </Card>
      );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;