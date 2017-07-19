/**
 * Created by wangxuan on 2017/7/19.
 */

import React, {Component} from 'react';
import {
    StackNavigator
} from 'react-navigation';

import WAnimatedIndex from './WAnimatedIndex'
import WAnimatedSpringScene from './WAnimatedSpringScene'
import WAnimationAlphaScene from './WAnimationAlphaScene'
import WAnimationRotateScene from './WAnimationRotateScene'
import WAnimationGroupScene from './WAnimationGroupScene'
import WAnimationFrameScene from './WAnimationFrameScene'

const animateAll = StackNavigator({
    WAnimatedIndex: {screen: WAnimatedIndex},
    WAnimationRotateScene: {screen: WAnimationRotateScene},
    WAnimationAlphaScene: {screen: WAnimationAlphaScene},
    WAnimatedSpringScene: {screen: WAnimatedSpringScene},
    WAnimationGroupScene: {screen: WAnimationGroupScene},
    WAnimationFrameScene: {screen: WAnimationFrameScene},
})

export default animateAll