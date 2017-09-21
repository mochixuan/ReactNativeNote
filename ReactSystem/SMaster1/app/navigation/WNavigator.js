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
//让安卓实现类似iOS的push动画，后来翻看官方issues的时候，真的发现了实现push动画的代码
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';

import WNavigatorTest1 from "./WNavigatorTest1";
import WNavigatorTest2 from "./WNavigatorTest2";
import WNavigatorTest3 from "./WNavigatorTest3";
import WNavigatorTab from './WNavigatorTab'
import WNavigatorDrawer from "./WNavigatorDawer";

// SMaster1 是你的react native 项目名  注意： 这块代码要放置到WNavigatorTest1，WNavigatorTest2下
const WNavigator = StackNavigator({
    Page1: {screen:WNavigatorTest1},
    Page2: {screen:WNavigatorTest2},
    Page3: {screen: WNavigatorTest3},
    Page4: {screen: WNavigatorTab},
    Page5: {screen: WNavigatorDrawer},
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
        /*单独头部其他就不用了*/
        /*header:<View style={{
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
     //导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
    headerMode: 'float',
    /*onTransitionStart:()=>{
        ToastAndroid.show('Start',ToastAndroid.SHORT);
    },
    onTransitionEnd:()=>{
        ToastAndroid.show('End',ToastAndroid.SHORT);
    },*/
    /*动画左右进出动画*/
    //headerMode: 'screen',
    transitionConfig:()=>({
        screenInterpolator:CardStackStyleInterpolator.forHorizontal,
    })
});

let showToast=function(data) {
    ToastAndroid.show(data,ToastAndroid.SHORT)
}

export default WNavigator

