'use strict';

import React from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    NativeModules,
} from 'react-native'

class AndroidReact1 extends React.Component {

    showToast(data) {
        const WToastAndroid = NativeModules.WToastAndroid;
        WToastAndroid.show(data,WToastAndroid.SHORT)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.baseText}>
                    Android+React Native Hello World
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress = {() => {
                        this.showToast('Hello Native')
                    } }>
                    <Text style={styles.text}>Show Native Toast</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress = {() => {
                        const WToastAndroid = NativeModules.WToastAndroid;
                        const WUIManagerModule = NativeModules.WUIManagerModule;
                        WUIManagerModule.measureLayout(4,5,
                            (value1,value2) => {
                                this.showToast('w=4,h=5 '+'面积'+value1+'周长'+value2)
                            },
                            (error) => {
                                this.showToast(error)
                            })
                    } }>
                    <Text style={styles.text}>Gain Native CallBack</Text>
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