/**
 * Created by wangxuan on 2017/8/18.
 */
import React,{Component} from 'react'
import {
    Image
} from 'react-native'

export default class Test1 extends Component {

    render() {
        return (
            <Image
                style={{
                    width:120,
                    height:180,
                }}
                source={require('../image/a7.png')}
            />
        )
    }

}