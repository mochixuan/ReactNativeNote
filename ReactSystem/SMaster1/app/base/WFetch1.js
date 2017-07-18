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

export default class WFetch1 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            jsonData: []
        }

        var request = new XMLHttpRequest();
        request.onreadystatechange = (e) => {
            if (request.readyState !== 4) {
                return
            }

            if (request.status ===200) {
                console.log(JSON.parse(request.responseText))
                this.setState({
                    jsonData: JSON.parse(request.responseText).topics
                })
            } else {
                console.log("========error")
            }
        }
        request.open('GET','http://bbs.reactnative.cn/api/category/1')
        request.send()

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