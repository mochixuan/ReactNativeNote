/**
 * Created by wangxuan on 2017/7/15.
 */

import React,{Component} from 'react'
import {
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native'

export default class Bananas extends Component {

    constructor(props) {
        super(props)
        this.state = {
            show: true
        }

        setInterval(() => {
            this.setState(preState => {
                return {
                    show: !preState.show
                }
            })
        },1000)
    }

    render() {
        let pic = {
            uri: 'http://pic.qiantucdn.com/58pic/18/06/21/15658PICxZV_1024.jpg'
        }
        let show = this.state.show ? 1 : 0
        return (
            <View>
                <Image
                    source={pic}
                    style={[styles.image,{opacity: show}]}/>

                <Text>收到:{this.props.message}</Text>

                <Text style={styles.bigblue}>一个样式1</Text>

                <Text style={styles.red}>一个样式2</Text>

                <Text style={[styles.bigblue,styles.red]}>样式12</Text>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
    },
    bigblue: {
        color: 'blue',
        backgroundColor: '#e00000',
    },
    red: {
        fontWeight: 'bold',
        fontSize: 32,
    }
})