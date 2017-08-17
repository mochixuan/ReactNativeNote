/**
 * Created by wangxuan on 2017/8/17.
 */
import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'

export default class TestLayout extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text1}>AA</Text>
                <Text style={styles.text2}>BB</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        margin: 20,
        backgroundColor: '#f5f5f5',
        borderWidth:4,
        borderColor: '#000',
    },
    text1: {
        width: 100,
        height: 100,
        textAlign: 'center',
        backgroundColor: '#456789',
        color: '#f5f5f5',
        alignItems: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 36,
        position: 'absolute',
    },
    text2: {
        width: 100,
        height: 100,
        textAlign: 'center',
        backgroundColor: '#ff0000',
        color: '#f5f5f5',
        alignItems: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 36,
    },
})