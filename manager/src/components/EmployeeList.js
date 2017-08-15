import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import { connect } from 'react-redux';

// import { emailChanged, passwordChanged, loginUser } from '../actions';
// import { Button, Card, CardSection, Input, Spinner } from './common';

class EmployeeList extends Component {
  render() {
    return (
    <View>
      <Text>Employee 1</Text>
      <Text>Employee 2</Text>
      <Text>Employee 3</Text>
      <Text>Employee 4</Text>
      <Text>Employee 5</Text>
      <Text>Employee 6</Text>
      <Text>Employee 7</Text>
    </View>);
  }
}

/* const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
}; */

export default EmployeeList; /* connect(mapStateToProps, 
  { emailChanged, passwordChanged, loginUser })
  (EmployeeList); */