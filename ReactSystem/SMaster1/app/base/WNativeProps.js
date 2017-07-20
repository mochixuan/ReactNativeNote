/**
 * Created by wangxuan on 2017/7/20.
 */

import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native'

export default class WNativeProps extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress = {this._handlePress}>
                    <MyButton label = 'Press Me'/>
                </TouchableOpacity>
                <Text style={styles.text}>测试</Text>
            </View>
        )
    }

}

var MyButton = React.createClass({
    render() {
        return (
            <View style={styles.button}>
                <Text style={styles.text}>{this.props.label}</Text>
            </View>
        )
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 160,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#48d1cc',
        borderRadius: 6,
        borderWidth: 6,
        borderColor: '#9948d1cc'
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        color: '#222222',
        fontWeight: 'bold',
    }
})