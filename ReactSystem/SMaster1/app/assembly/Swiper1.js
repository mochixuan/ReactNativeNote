/**
 * Created by wangxuan on 2017/7/29.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableHighlight,
    TouchableNativeFeedback,
    Platform,
} from 'react-native';

import Swiper from 'react-native-swiper';

const width = Dimensions.get('window').width;
const list1 = [
    {title: '汉堡',img: require('../img/e1.png')},
    {title: '鸡腿',img: require('../img/e2.png')},
    {title: '冰淇淋',img: require('../img/e3.png')},
    {title: '炖汤',img: require('../img/e4.png')},
    {title: '三明治',img: require('../img/e5.png')},
    {title: '薯条',img: require('../img/e6.png')},
    {title: '甜筒',img: require('../img/e7.png')},
    {title: '咖啡',img: require('../img/e8.png')},
];


export default class Swiper1 extends Component {

    renderList(datas,n) {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>
                {
                    datas.map((item,i) => {
                        let view = (
                            <View style={{
                                width: width/4,
                                height: width /4,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Image
                                    style={{
                                        width: width/12,
                                        height: width/12,
                                    }}
                                    source={item.img}
                                />
                                <Text
                                    style={{
                                        fontSize: 14,
                                        color: '#95B9C7',
                                        marginTop: 4,
                                    }}
                                >{item.title}</Text>
                            </View>
                        )
                        return (
                            (Platform.OS == 'ios') ? (
                                <TouchableHighlight
                                    key={i}
                                    onPress={()=>{}}>
                                    {view}
                                </TouchableHighlight>
                            ) :(
                                <TouchableNativeFeedback
                                    key={i}
                                    onPress={()=>{}}>
                                    {view}
                                </TouchableNativeFeedback>
                            )
                        )
                    })
                }
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Swiper
                    height = {240}
                    autoplay = {true}
                    autoplayTimeout = {4}
                    dot = {
                        <View
                            style={{
                                backgroundColor: '#F5F5F5',
                                width: 8,
                                height: 8,
                                borderRadius: 4,
                                margin:4,
                            }}
                        />
                    }
                    activeDot = {
                        <View
                            style={{
                                backgroundColor: '#FF0000',
                                width: 8,
                                height: 8,
                                borderRadius: 4,
                                margin:4,
                            }}
                        />
                    }
                    style={styles.wrapper}>
                    <View style={styles.slide1}>
                        <Text style={styles.text}>Hello Swiper</Text>
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>Beautiful</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>And simple</Text>
                    </View>
                </Swiper>
                <Swiper
                    height = {240}
                    paginationStyle={{
                        backgroundColor: '#C2DFFF'
                    }}
                    style={styles.wrapper}>
                    {this.renderList(list1,0)}
                    {this.renderList(list1,0)}
                    {this.renderList(list1,0)}
                </Swiper>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    swiper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
})

