/**
 * Created by wangxuan on 2017/7/17.
 */

import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'

export default class WFetch extends Component {

    constructor(props) {
        super(props)

        fetch('http://bbs.reactnative.cn/api/category/1',{
            /*method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstParam: 'first',
                secondParam: 'second',
            })*/
        }).then((respone) => respone.json())
            .then((jsonData) => {
                console.log(jsonData);
            })
            .catch((error) => {
                console.warn(error)
            })

    }

    render() {
        return (
            <View>

            </View>
        )
    }

}