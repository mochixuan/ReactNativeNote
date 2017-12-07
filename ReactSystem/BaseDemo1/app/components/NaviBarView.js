import React,{Component} from 'react'
import {
    View,
    Platform,
} from 'react-native'

export default class NaviBarView extends Component {
    render() {
        const naviBarHeight = Platform.OS==='ios'?20:0
        return (
            <View style={{
                height: naviBarHeight,
                backgroundColor: '#00000000'
            }}></View>
        )
    }
}