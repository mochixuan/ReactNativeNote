/**
 * Created by wangxuan on 2017/7/19.
 */

import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Animated,
} from 'react-native'

/*Animated仅封装了四个可以动画化的组件：View、Text、Image和ScrollView，
 不过你也可以使用Animated.createAnimatedComponent()来封装你自己的组件*/

/*下面是一个在加载时带有淡入动画效果的视图*/
export default class WAnimated extends Component {

    render() {
        return (
            <View style={{
                alignItems: 'center'
            }}>
                <FadeInView style={{
                    width: 250,
                    height: 60,
                    margin: 20,
                    backgroundColor: 'powderblue'}}>
                    <Text style={{
                        fontSize: 28,
                        textAlign: 'center',
                        margin: 10}}
                    >Has Fading in</Text>
                </FadeInView>

                <View style={{
                    width: 250,
                    height: 60,
                    margin: 20,
                    backgroundColor: 'powderblue'}}>
                    <Text style={{
                        fontSize: 28,
                        textAlign: 'center',
                        margin: 10}}
                    >No Fading in</Text>
                </View>
            </View>
        )
    }

}

class FadeInView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fadeAnim: new Animated.Value(0)  // 透明度初始值
        }
    }

    componentDidMount() {
        Animated.timing(            // 随时间变化而执行的动画类型
            this.state.fadeAnim,    // 动画中的变量值
            {
                toValue: 1,
                duration: 2000,
            }
        ).start()                   // 开始执行动画
    }

    render() {
        return (
            <Animated.View style={{          // 可动画化的视图组件
                ...this.props.style,         //不错
                opacity: this.state.fadeAnim  // 将透明度指定为动画变量值
            }}>
                {this.props.children}
            </Animated.View>
        )
    }

}