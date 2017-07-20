'use strict';

import React from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'
import WToastAndroid from './WToastAndroid';

class AndroidReact1 extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.baseText}>
                    Android+React Native Hello World
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress = {() => WToastAndroid.show("Hello Native",WToastAndroid.SHORT) }>
                    <Text style={styles.text}>Show Native Toast</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        margin: 10,
    },
    baseText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    button: {
            marginTop: 20,
            backgroundColor:'#48d1cc',
            height:48,
            width:160,
            borderRadius:5,
            justifyContent: 'center',
            alignItems: 'center',
    },
    text: {
        color: '#f5f5f5',
        fontWeight: 'bold'
    }
})

AppRegistry.registerComponent('AndroidReact1' , () => AndroidReact1)