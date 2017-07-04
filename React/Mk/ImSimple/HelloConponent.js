/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

/*自定义样式ES6*/
export default class HelloConponent extends Component {
    render() {
        return <Text style={{
            fontSize:20,
            backgroundColor:'red'
        }}>Hello</Text>
    }
}

/*自定义样式ES5*/
/*var HelloConponent = React.createClass({
    render() {
        return <Text style={{
            fontSize:20,
            backgroundColor:'green'
        }}>Hello</Text>
    }
})
module.exports = HelloConponent;    //导出*/

/*函数式定义主件 不能使用this*/
/*
function HelloConponent() {
    return <Text style={{
        fontSize:20,
        backgroundColor:'blue'
    }}>Hello</Text>
}
module.exports = HelloConponent;    //导出*!/*/
