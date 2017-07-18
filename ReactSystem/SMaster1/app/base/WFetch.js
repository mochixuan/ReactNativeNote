/**
 * Created by wangxuan on 2017/7/17.
 */

import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Image
} from 'react-native'

export default class WFetch extends Component {

    constructor(props) {
        super(props)

        this.state = {
            jsonData: []
        }

        //ES6
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
                this.setState({
                    jsonData: jsonData.topics
                })
            })
            .catch((error) => {
                console.warn('异常：'+error)
            })

    }

    render() {

        let imgBase = 'http://reactnative.cn/proxy/bbs.reactnative.cn'

        return (
            <View style={styles.main}>
                <FlatList
                    data = {this.state.jsonData}
                    renderItem = {
                        ({item}) => {
                            return (
                                <View style={styles.mainItem}>
                                    <Image
                                        style={styles.image}
                                        source={{uri : imgBase+item.user.picture}}
                                    />
                                    <View>
                                        <Text style={styles.time}>{
                                            item.timestampISO
                                        }</Text>

                                        <Text style={styles.content}>{
                                            item.title
                                        }</Text>
                                    </View>
                                </View>
                            )
                        }
                    }
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    mainItem: {
        marginBottom: 10,
        alignItems: 'stretch',
        borderBottomWidth: 2,
        borderColor: '#e0e0e0',
        flexDirection: 'row',
        padding: 10,
    },
    image: {
        width: 50,
        height: 50,
        marginRight:20,
    },
    time: {
        color: '#666666',
        fontSize: 14,
    },
    content: {
        color: '#333333',
        fontSize: 20,
        marginTop: 10,
    }
})