/**
 * Created by wangxuan on 2017/7/30.
 */
import React,{Component} from 'react'
import {
    StackNavigator
} from 'react-navigation'
import WNavigatorTest1 from "./WNavigatorTest1";
import WNavigatorTest2 from "./WNavigatorTest2";

// SMaster1 是你的react native 项目名  注意： 这块代码要放置到WNavigatorTest1，WNavigatorTest2下
const WNavigator = StackNavigator({
    Main: {screen:WNavigatorTest1},
    Profile: {screen: WNavigatorTest2}
});

export default WNavigator

