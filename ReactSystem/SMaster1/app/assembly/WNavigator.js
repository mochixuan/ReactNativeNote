/**
 * Created by wangxuan on 2017/7/30.
 */
import React,{Component} from 'react'
import {
    View,
    Text,
} from 'react-native'
import {
    ToastAndroid
} from 'react-native'
import {
    StackNavigator
} from 'react-navigation'
import WNavigatorTest1 from "./WNavigatorTest1";
import WNavigatorTest2 from "./WNavigatorTest2";
import WNavigatorTest3 from "./WNavigatorTest3";
import WNavigatorTab from './WNavigatorTab'

// SMaster1 是你的react native 项目名  注意： 这块代码要放置到WNavigatorTest1，WNavigatorTest2下
const WNavigator = StackNavigator({
    Page1: {screen:WNavigatorTest1},
    Page2: {screen:WNavigatorTest2},
    Page3: {screen: WNavigatorTest3},
    Page4: {screen: WNavigatorTab},
},{
    initialRouteName: 'Page1',
    initialRouteParams:{
        name: '旋',
    },
    navigationOptions: {
        title: '页面一',
        headerTitleStyle: {
            color: 'green',
            alignSelf: 'center'
        },
        /*单独头部其他就不用了
        header:<View style={{
            height: 60,
            backgroundColor: '#f51fc8',
        }}/>*/
        /* title一样
        headerTitle:'HeaderTitle',*/
        /*头部样式
        headerStyle:{
            backgroundColor:'#ff8e1c',
        },*/
        gesturesEnabled: true,
    },
    mode:'modal',
    onTransitionStart:()=>{
        ToastAndroid.show('Start',ToastAndroid.SHORT);
    },
    onTransitionEnd:()=>{
        ToastAndroid.show('End',ToastAndroid.SHORT);
    },
});

let showToast=function(data) {
    ToastAndroid.show(data,ToastAndroid.SHORT)
}

export default WNavigator

