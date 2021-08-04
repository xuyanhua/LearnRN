/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View, Dimensions
} from 'react-native';
import LoginLeaf from './LoginLeaf'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <LoginLeaf/>
    );
  }
};

const styles = StyleSheet.create({
});

export default App;
