import React, {Component} from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    if (text === 'd') alert('changed');
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }
  
  renderButton() {
    return  (<Button onPress={this.onButtonPress.bind(this)}>
          Log In
      </Button>); /*this.state.loading ? 
      <Spinner size="small" />
    :*/
     
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
  const { email, password, error } = auth;
  return { email, password, error };
};

export default connect(mapStateToProps, 
  { emailChanged, passwordChanged, loginUser })
  (LoginForm);