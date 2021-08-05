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
let widthOfMargin = Dimensions.get('window').width * 0.05;

class LoginLeaf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputNum: "",
      inputPW: ""
    }
    this.updatePW = this.updatePW.bind(this);
  }
  updateNum(newText) {
    this.setState(() => {
      return {
        inputNum: newText
      }
    })
  }
  updatePW(newText) {
    this.setState(() => {
      return {
        inputPW: newText
      }
    })
  }
  userPressConfirm() {
    this.props.onLoginPressed(this.state.inputedNum, this.state.inputedPW);
  }
  userPressAddressBook() {

  }
  render() {
    return (
      <View style={styles.contianer}>
        <TextInput placeholder={"请输入手机号"} style={styles.textInputStyle} onChangeText={(newText) => this.updateNum(newText)}></TextInput>
        <Text style={styles.textPromptStyle}>您的手机号是：{this.state.inputNum}</Text>
        <TextInput placeholder={"请输入密码"} secureTextEntry={true} style={styles.textInputStyle}></TextInput>
        <Text style={styles.bigTextPromptStyle}
          onPress={() => this.userPressConfirm()}>确定</Text>
        <Text style={styles.bigTextPromptStyle}
          onPress={() => this.userPressAddressBook()}>通讯录</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 80
  },
  textInputStyle: {
    margin: widthOfMargin,
    backgroundColor: 'gray',
    fontSize: 20
  },
  textPromptStyle: {
    margin: widthOfMargin,
    fontSize: 20
  },
  bigTextPromptStyle: {
    margin: widthOfMargin,
    backgroundColor: 'gray',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    padding: 10
  }
});

export default LoginLeaf;
