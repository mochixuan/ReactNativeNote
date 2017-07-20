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

export default class WAccessible extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    accessible = {true}
                    accessibilityLabel={'Tap me!'}
                    onPress = {this._onPress}>
                    <View style={styles.button}>
                        <Text style={styles.text}>Press me</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

}

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