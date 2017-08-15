import React, {Component} from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }
  
  renderButton() {
    const { loading } = this.props;
    return  (
      loading ? 
      <Spinner size="large" />
        :<Button onPress={this.onButtonPress.bind(this)}>
          Log In
      </Button>);     
  }
  
  render() {
    return (
      <Card>     
        <CardSection> 
          <Input 
            label="Email"
            onChangeText={this.onEmailChange.bind(this)}
            placeholder="user@gmail.com" 
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input 
            secureTextEntry
            placeholder="password"
            label="Password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {this.props.error}
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
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, 
  { emailChanged, passwordChanged, loginUser })
  (LoginForm);