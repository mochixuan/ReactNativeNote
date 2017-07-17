/**
 * Created by wangxuan on 2017/7/16.
 */

import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    FlatList,
} from 'react-native'

export default class WFlatList extends Component {

    constructor(props) {
        super(props)

        let data = [
            {key:'Android'},
            {key:'java'},
            {key:'IOS'},
            {key:'GO'},
            {key:'COCO2X'},
            {key:'NODE'},
            {key:'VUE'},
            {key:'ES'}
        ]

        this.state = {
            data: data
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <FlatList
                    data = {this.state.data}
                    renderItem = { ({item}) => <Text style={styles.item}>{item.key}</Text> }
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        alignItems: 'center',
        borderWidth: 20,
        borderColor: '#199470',
        margin: 10,
    },
    item: {
        color: '#456789',
        fontSize: 18,
        padding: 10,
        borderWidth: 2,
        borderColor: '#629419',
        marginTop:4,
    }
})