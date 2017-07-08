/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component,PropTypes} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class PropsTest extends Component {

    //constructor(props)必须加在主界面中否则无效

    //定义默认属性
    static defaultProps = {
        name:'小王',
        //sex:'男',
        age:24,
        majar:'android'
    }
    static propTypes = {
        name:PropTypes.string,
        sex:PropTypes.string.isRequired,
        age:PropTypes.number,
    }

    render() {
        return <View>
            <Text style={{
                fontSize: 20,
                backgroundColor: 'red',
                padding:10
            }}>Hello:{this.props.name}</Text>
            <Text style={{
                fontSize:22,
                backgroundColor:'orange',
                padding:10
            }}>sex:{this.props.sex}</Text>
            <Text style={{
                fontSize:24,
                backgroundColor:'blue',
                padding:10
            }}>age:{this.props.age}</Text>
            <Text style={{
                fontSize:26,
                backgroundColor:'green',
                padding:10
            }}>majar:{this.props.majar}</Text>
        </View>
    }
}

