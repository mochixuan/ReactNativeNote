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
} from 'react-native'

export default class WAnimationSpringScene extends Component {

    static navigationOptions = {
        title: '缩放动画'
    }

    constructor(props) {
        super(props);
        this.springValue = new Animated.Value(0.3)
    }

    componentDidMount() {
        this.spring()
    }


    /*
    *  friction 摩擦系数，默认40
    *  tension 张力系数，默认7
    *
    * */
    spring() {
        this.springValue.setValue(0.3)
        Animated.spring(
            this.springValue,
            {
                toValue: 1,
                friction: 1
            }
        ).start()
    }


    render() {

        return (
            <View style={styles.container}>

                <Animated.Image
                    style={{
                        width: 128,
                        height: 128,
                        transform:
                            [
                                {
                                    scale: this.springValue
                                }
                            ]
                    }}
                    source={require('../img/react.png')}/>

                <TouchableOpacity onPress={() => this.spring()} style={styles.button}>
                    <Text style={styles.text}>启动动画</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginTop: 40,
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