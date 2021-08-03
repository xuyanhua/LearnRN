/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native';

let widthOfMargin = Dimensions.get('window').width * 0.05;

export default class App extends Component {
    static myStaticVar = 'init value';
    static myStaticMethod(){
        console.log('myStaticMethod...')
    }
    constructor(props) {
        super(props);
        // 成员变量
        // this.myProp1 = 'test';
        // this.myProp2 = true;
        this.state = {
            inputNum: '',
            inputPW: ''
        };
        this.updatePW = this.updatePW.bind(this);
    }

    updateNum(newText) {
        this.setState((oldState) => {
            for (var name in oldState) {
                console.log(name + "--->" + oldState[name]);
            }
            return {
                inputNum: newText,
                newVariable: 'newVariable123'
            }
        }, this.changeNumDone)
    }
    changeNumDone() {
        console.info('changeNumDone ...');
    }
    updatePW(newText) {
        this.setState(() => {
            return {
                inputPW: newText,
            }
        })
    }
    //判断是否需要渲染
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps + "-->" + nextState);
        if (this.state.inputNum.length < 3) {
            return false;
        }
        return true;
    }
    render() {
        return (
            <View style={styles.contianer}>
                <TextInput style={styles.textInputStyle} placeholder={'请输入手机号'} onChangeText={(newText) => this.updateNum(newText)} />
                <Text style={styles.textPromptStyle}>
                    您输入的手机号：{this.state.inputNum}
                </Text>
                <TextInput style={styles.textInputStyle} placeholder={'请输入密码'} secureTextEntry={true} />
                <Text style={styles.bigTextPromptStyle}>确定</Text>
            </View>
        );
    }
}
;

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

