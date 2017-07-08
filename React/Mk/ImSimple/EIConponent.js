import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

var a = "wang";
var b = 23;
export {a,b};   //导出常量

//默认的相当于android 类一样加default
export default class EIConponent extends Component {

    render() {
        return <Text style={{
            fontSize:20,
            backgroundColor:'yellowgreen'
        }}>原</Text>
    }

}

//导出组件
export class WConponent extends Component {
    render() {
        return <Text style={{
            fontSize:20,
            backgroundColor:'orange'
        }}>组件</Text>
    }
}

//导出方法
export function sum(x,y) {
    return x+y;
}
