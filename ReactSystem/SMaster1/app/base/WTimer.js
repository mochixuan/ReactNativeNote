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

export default class WTimer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: 0
        }
    }

    startTimeout() {
        this.props.timer = setTimeout(() => {
                                this.setState({
                                    data: this.state.data+1
                                })
                            },500)
    }


    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress = {() => this.startTimeout()}>
                    <View style={styles.button}>
                        <Text style={styles.text}>Press me</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.text}>{this.state.data}</Text>
            </View>
        )
    }

    componentWillUnmount() {
        this.props.timer.clearTimeout()
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
    },
})