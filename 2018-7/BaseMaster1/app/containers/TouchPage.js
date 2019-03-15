import React, {Component} from 'react'
import {Dimensions, StyleSheet, View ,Text} from 'react-native'

const {width,height} = Dimensions.get('window')

export default class TouchPage extends Component{

    constructor(props) {
        super(props)

        this.state = {
            items: [
                {text: '新闻'},
                {text: '推荐'},
                {text: '动漫'},
                {text: '电影'},
                {text: '娱乐'},
                {text: 'NBA'},
                {text: '音乐'},
                {text: '健康'},
                {text: '时代'},
                {text: '时尚'},
                {text: '地方'},
                {text: '南北'},
                {text: '东西'},
                {text: '深圳'},
                {text: '湖南'},
                {text: '江西'},
                {text: '香港'},
                {text: '澳门'},
            ]
        }
    }

    render() {

        const itemViews = this.state.items.map((item,index)=>{
            return (
                <View style={styles.item_container} key={item.text+index}>
                    <View style={styles.item}>
                        <Text style={styles.text}>{item.text}</Text>
                    </View>
                </View>
            )
        })

        return (
            <View style={styles.container}>
                {itemViews}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 20
    },
    item_container: {
        width: width/4,
        height: width/7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        width: width/5,
        height: width/9,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },
    text: {
        fontSize: 16,
        color: '#444'
    }
})
