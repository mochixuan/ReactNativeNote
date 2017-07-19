/**
 * Created by wangxuan on 2017/7/19.
 */

import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Animated,
    TouchableOpacity,
    Easing,
} from 'react-native'

export default class AnimationRotateScene extends Component {

    static navigationOptions = {
        title: '旋转动画'
    }

    constructor(props) {
        super(props);
        this.spinValue = new Animated.Value(0)
    }

    componentDidMount () {
        this.spin()
    }

    spin () {
        this.spinValue.setValue(0)
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 4000,
                easing: Easing.linear
            }
        ).start(() => this.spin())
    }


    render() {

        const
            spin = this.spinValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg']
            })


        return (
            <View style={styles.container}>

                <Animated.Image
                    style={{
                        width: 128,
                        height: 128,
                        transform:
                            [
                            {rotate: spin}
                            ] }}
                    source={require('../img/react.png')}
                />
                <TouchableOpacity onPress={() => this.spin()} style={styles.button}>
                    <Text style={styles.text}>启动动画</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginTop: 20,
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
    }
});