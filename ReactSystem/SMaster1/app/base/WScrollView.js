/**
 * Created by wangxuan on 2017/7/16.
 */

import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
} from 'react-native'

export default class WScrollView extends Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.main}>
                    <Text style={styles.baseText}>一介函数</Text>
                    <Image style={styles.baseImage} source={require('../img/a2.png')}/>
                    <Image style={styles.baseImage} source={require('../img/a3.png')}/>
                    <Image style={styles.baseImage} source={require('../img/a4.png')}/>
                    <Text style={styles.baseText}>二介函数</Text>
                    <Image style={styles.baseImage} source={require('../img/a5.png')}/>
                    <Image style={styles.baseImage} source={require('../img/a6.png')}/>
                    <Image style={styles.baseImage} source={require('../img/a7.png')}/>
                    <Image style={styles.baseImage} source={require('../img/a8.png')}/>
                    <Text style={styles.baseText}>三介函数</Text>
                    <Image style={styles.baseImage} source={require('../img/a2.png')}/>
                    <Image style={styles.baseImage} source={require('../img/a3.png')}/>
                    <Image style={styles.baseImage} source={require('../img/a4.png')}/>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        alignItems: 'center'
    },
    baseText: {
        fontSize: 34,
        margin: 10,
        color: '#456789',
    },
    baseImage: {
        width: 300,
        height:240,
        margin: 10,
    }
})