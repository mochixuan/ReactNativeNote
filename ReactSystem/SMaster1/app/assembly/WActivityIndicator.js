/**
 * Created by wangxuan on 2017/7/24.
 */

import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native'

export default class WActivityIndicator extends Component {

    constructor(props) {
        super(props)
        this.state = {
            animating: true,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => this.showOrHide()}
                    style={styles.button}>
                    <Text style={styles.text}>{this.state.animating?'隐藏':'开启'}</Text>
                </TouchableOpacity>
                <ActivityIndicator
                    animating={this.state.animating}
                    style={[styles.centering,{height: 80}]}
                    size='large'
                />
            </View>
        )
    }

    componentWillMount() {

    }

    showOrHide() {
        if(this.state.animating) {
            this.setState({
                animating: false
            })
        } else {
            this.setState({
                animating: true
            })
        }
    }

}

const styles = StyleSheet.create({
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    gray: {
        backgroundColor: '#cccccc'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 8,
    },
    container: {
        flex: 1,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginTop: 40,
        backgroundColor:'#48d1cc',
        height:48,
        width:140,
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#f5f5f5',
        fontWeight: 'bold'
    },
})